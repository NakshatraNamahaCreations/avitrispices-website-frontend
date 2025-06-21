import { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import {
  FaShoppingCart,
  FaBox,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";

const OrderTracking = () => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [trackingData, setTrackingData] = useState({});
  const user = useSelector((state) => state.auth?.user || null);

  const [orders, setOrders] = useState([]);

  // Load orders once when user changes
  useEffect(() => {
    if (!user?.id) {
      setOrders([]);
      return;
    }
    const storedOrders = JSON.parse(localStorage.getItem(`userOrders_${user.id}`)) || [];
    setOrders(storedOrders);
  }, [user?.id]);

  // Fetch tracking data when orders or user change
  useEffect(() => {
    if (!user?.id || orders.length === 0) return;

    const isValidId = (id) => id && typeof id === "string" && id.trim().length > 0;

    const fetchTrackingData = async () => {
      const trackingPromises = orders.map(async (order) => {
        if (!isValidId(order.seller_order_id) && !isValidId(order.awb)) {
          console.warn(
            `Skipping tracking for order ${order.orderId} because seller_order_id and awb are both empty.`
          );
          return { orderId: order.orderId, tracking: null };
        }

        try {
          const response = await axios.post(
            "https://api.nncwebsitedevelopment.com/api/rapidshyp/track-order",
            {
              seller_order_id: order.seller_order_id,
              contact: order.shippingAddress.phone,
              email: order.shippingAddress.email,
              awb: order.awb,
            },
            { headers: { "Content-Type": "application/json" } }
          );

          if (response.data.success) {
            return { orderId: order.orderId, tracking: response.data.records[0] };
          } else {
            console.warn(`No tracking data for order ${order.orderId}`);
            return { orderId: order.orderId, tracking: null };
          }
        } catch (error) {
          console.error(
            `Error tracking order ${order.orderId}:`,
            error.response?.data || error.message
          );
          toast.error(`Failed to fetch tracking for order ${order.orderId}`);
          return { orderId: order.orderId, tracking: null };
        }
      });

      const results = await Promise.all(trackingPromises);
      const trackingMap = results.reduce((acc, { orderId, tracking }) => {
        acc[orderId] = tracking;
        return acc;
      }, {});
      setTrackingData(trackingMap);
    };

    fetchTrackingData();
  }, [user?.id, orders]);

  const toggleRow = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const getTimelineSteps = (tracking) => {
    if (!tracking) {
      return [
        { status: "Order Placed", date: null, time: null, active: true },
        { status: "Order Dispatched", date: null, time: null, active: false },
        { status: "Delivered Successfully", date: null, time: null, active: false },
      ];
    }

    const { order_status, creation_date, shipment_details } = tracking;
    const deliveredDate = shipment_details?.[0]?.delivered_date;
    const awbAssignedDate = shipment_details?.[0]?.awb_assigned_date;

    return [
      {
        status: "Order Placed",
        date: creation_date
          ? new Date(creation_date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })
          : null,
        time: creation_date
          ? new Date(creation_date).toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
            })
          : null,
        active: true,
      },
      {
        status: "Order Dispatched",
        date: awbAssignedDate
          ? new Date(awbAssignedDate).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })
          : null,
        time: awbAssignedDate
          ? new Date(awbAssignedDate).toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
            })
          : null,
        active:
          order_status === "PROCESSING" ||
          order_status === "SHIPPED" ||
          order_status === "DELIVERED",
      },
      {
        status: "Delivered Successfully",
        date: deliveredDate
          ? new Date(deliveredDate).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })
          : null,
        time: deliveredDate
          ? new Date(deliveredDate).toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
            })
          : null,
        active: order_status === "DELIVERED",
      },
    ];
  };

  const getExpectedDeliveryDate = (tracking) => {
    if (!tracking || !tracking.shipment_details?.[0]?.current_courier_edd) {
      return "Not available";
    }
    return new Date(tracking.shipment_details[0].current_courier_edd).toLocaleDateString(
      "en-US",
      {
        weekday: "short",
        month: "long",
        day: "numeric",
      }
    );
  };

  return (
    <div style={{ margin: "10% 0 2% 0", fontFamily: "kapraneue, sans-serif" }}>
      {user ? (
        orders.length === 0 ? (
          <p style={{ textAlign: "center", fontSize: "24px" }}>No orders found.</p>
        ) : (
          orders.map((order) => (
            <div key={order.orderId} className="mb-3">
              <Button
                variant="light"
                className="w-100 text-start d-flex justify-content-between align-items-center p-3 btn-track"
                onClick={() => toggleRow(order.orderId)}
                style={{
                  border: "1px solid black",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                  fontSize: "32px",
                }}
              >
                Track Order
                {expandedRow === order.orderId ? <FaChevronUp /> : <FaChevronDown />}
              </Button>

              {expandedRow === order.orderId && (
                <div
                  className="mt-3 p-3 border rounded order-background-card"
                  style={{ backgroundColor: "white" }}
                >
                  <p className="fw-bold">Order #{order.orderId}</p>

                  <Row className="text-center align-items-center my-4">
                    {getTimelineSteps(trackingData[order.orderId]).map((step, index) => (
                      <Col key={index} className="d-flex flex-column align-items-center">
                        <div
                          className={`rounded-circle d-flex align-items-center justify-content-center circle-track ${
                            step.active ? "bg-danger text-white" : "bg-light border"
                          }`}
                          style={{ width: "80px", height: "80px" }}
                        >
                          {index === 0 && <FaShoppingCart size={40} className="icon-track" />}
                          {index === 1 && <FaBox size={40} className="icon-track" />}
                          {index === 2 && <FaCheckCircle size={40} className="icon-track" />}
                        </div>
                        <h5 className="fw-bold mt-2 h5-tracktitle" style={{ letterSpacing: "1px", fontSize: "24px" }}>
                          {step.status}
                        </h5>
                        <p style={{ letterSpacing: "1px", fontSize: "18px" }} className="p-tracktitle">
                          {step.date || "Not available"}
                        </p>
                        <p style={{ letterSpacing: "1px", fontSize: "18px" }} className="p-tracktitle">
                          {step.time || ""}
                        </p>
                      </Col>
                    ))}
                  </Row>

                  <div className="text-center mt-3">
                    <h5 className="fw-bold h5-delivery">
                      Expected Delivery by {getExpectedDeliveryDate(trackingData[order.orderId])}
                    </h5>
                  </div>
                </div>
              )}
            </div>
          ))
        )
      ) : (
        <p style={{ textAlign: "center", fontSize: "24px" }}>Please log in to view your order tracking.</p>
      )}
    </div>
  );
};

export default OrderTracking;
