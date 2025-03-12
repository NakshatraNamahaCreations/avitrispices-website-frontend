import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import {
  FaShoppingCart,
  FaBox,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const OrderTracking = () => {
  const [expandedRow, setExpandedRow] = useState(null);

  // Toggle Function for Expanding/Collapsing Details
  const toggleRow = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <>
      <div
        style={{ margin: "0% 0 2% 0", fontFamily: "kapraneue, sans-serif" }}
      >
        {/* Expandable Button Section */}
        <Button
          variant="light"
          className="w-100 text-start d-flex justify-content-between align-items-center p-3"
          onClick={() => toggleRow("orderTracking")}
          style={{
            border: "1px solid black",
            borderRadius: "8px",
            fontWeight: "bold",
            letterSpacing: "1px",
            fontSize: "32px",
          }}
        >
          TRACK ORDER
          {expandedRow === "orderTracking" ? (
            <FaChevronUp />
          ) : (
            <FaChevronDown />
          )}
        </Button>

        {/* Expandable Content - Order Tracking Details */}
        {expandedRow === "orderTracking" && (
          <div className="mt-3 p-3 border rounded">
            <p className="fw-bold">Order #66541324</p>

            {/* Order Timeline */}
            <Row className="text-center align-items-center my-4">
              {/* Order Placed */}
              <Col className="d-flex flex-column align-items-center">
                <div
                  className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "80px", height: "80px" }}
                >
                  <FaShoppingCart size={40} />
                </div>
                <h5 className="fw-bold mt-2" style={{letterSpacing: "1px", fontSize: "24px" }}>Order Placed</h5>
                <p>10th March 2025</p>
                <p>2:25 PM</p>
              </Col>

              {/* Order Dispatched */}
              <Col className="d-flex flex-column align-items-center">
                <div
                  className="bg-light border rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "80px", height: "80px" }}
                >
                  <FaBox size={40} />
                </div>
                <h5 className="fw-bold mt-2" style={{letterSpacing: "1px", fontSize: "24px" }}>Order Dispatched</h5>
                <p style={{ letterSpacing: "1px", fontSize: "18px" }}>15th March 2025</p>
                <p style={{ letterSpacing: "1px", fontSize: "18px" }}>10:00 AM</p>
              </Col>

              {/* Delivered Successfully */}
              <Col className="d-flex flex-column align-items-center">
                <div
                  className="bg-light border rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "80px", height: "80px" }}
                >
                  <FaCheckCircle size={40} />
                </div>
                <h5 className="fw-bold mt-2" style={{letterSpacing: "1px", fontSize: "24px" }}>Delivered Successfully</h5>
                <p style={{ letterSpacing: "1px", fontSize: "18px" }}>25th March 2025</p>
                <p style={{ letterSpacing: "1px", fontSize: "18px" }}>6:25 PM</p>
              </Col>
            </Row>

            {/* Expected Delivery Date */}
            <div className="text-center mt-3">
              <h5 className="fw-bold">Expected Delivery by Tue, March 25th</h5>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default OrderTracking;
