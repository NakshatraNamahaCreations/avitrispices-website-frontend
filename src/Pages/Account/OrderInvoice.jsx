import { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function OrderInvoice() {
  const [expandedRow, setExpandedRow] = useState(null);
  const user = useSelector((state) => state.auth?.user || null);

  // Fetch orders from localStorage
  const orders = user?.id
    ? JSON.parse(localStorage.getItem(`userOrders_${user.id}`)) || []
    : [];

  // Map localStorage orders to the format expected by the component
  const formattedOrders = orders
    .filter((order) => order && typeof order === "object" && order.orderId && Array.isArray(order.items)) // Ensure order is valid and has items
    .map((order) => ({
      id: order.orderId,
      title: `ORDER INVOICE #${order.orderId}`,
      products: (order.items || []).map((item) => ({
        name: item.title || "Unknown Product",
        price: parseFloat(item.price) || 0,
        oldPrice: item.discountPrice
          ? parseFloat(item.discountPrice)
          : parseFloat(item.price) * 1.1 || 0,
        quantity: item.quantity || 1,
      })),
      address: order.shippingAddress
        ? `${
            order.shippingAddress.address || ""
          }, ${order.shippingAddress.city || ""}, ${
            order.shippingAddress.state || ""
          } - ${order.shippingAddress.pincode || ""}${
            order.shippingAddress.country
              ? ", " + order.shippingAddress.country
              : ""
          }`
        : "No address provided",
      subtotal: parseFloat(order.subtotal) || 0,
      shipping: parseFloat(order.shipping) || 0,
      tax: parseFloat(order.tax || 0),
      total: parseFloat(order.total) || 0,
    }));

  // Toggle row expansion
  const toggleRow = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <>
      <div
        style={{ margin: "10% 0 2% 0", fontFamily: "kapraneue, sans-serif" }}
      >
        {user ? (
          formattedOrders.length === 0 ? (
            <p style={{ textAlign: "center", fontSize: "24px" }}>
              No orders found.
            </p>
          ) : (
            formattedOrders.map((order) => (
              <div key={order.id} className="mb-3">
                {/* Order Header Button */}
                <Button
                  variant="light"
                  className="w-100 text-start d-flex justify-content-between align-items-center p-3 btn-invoice"
                  onClick={() => toggleRow(order.id)}
                  style={{
                    border: "1px solid black",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                    fontSize: "32px",
                  }}
                >
                  {order.title}
                  {expandedRow === order.id ? <FaChevronUp /> : <FaChevronDown />}
                </Button>

                {/* Expandable Order Details */}
                {expandedRow === order.id && (
                  <div
                    className="p-3 mt-2 order-background-card"
                    style={{
                      border: "1px solid #ccc",
                      borderRadius: "8px",
                      background: "#fff",
                    }}
                  >
                    <div className="d-flex justify-content-between">
                      <h5
                        style={{ letterSpacing: "1px", fontSize: "26px" }}
                        className="h5-orderinvoice"
                      >
                        {order.title}
                      </h5>
                    </div>

                    {/* Product Table */}
                    <Table bordered>
                      <thead>
                        <tr
                          style={{ letterSpacing: "1px", fontSize: "24px" }}
                          className="tr-thead"
                        >
                          <th>Product</th>
                          <th>Quantity</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {order.products.length > 0 ? (
                          order.products.map((product, index) => (
                            <tr key={index}>
                              <td
                                style={{ letterSpacing: "1px", fontSize: "18px" }}
                                className="td-tbody"
                              >
                                <div>
                                  <strong>{product.name}</strong> <br />
                                  <span
                                    style={{
                                      textDecoration: "line-through",
                                      color: "red",
                                    }}
                                  >
                                    Rs {product.oldPrice.toFixed(2)}
                                  </span>
                                </div>
                              </td>
                              <td>{product.quantity}</td>
                              <td>
                                <strong>Rs {product.price.toFixed(2)}</strong>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="3" style={{ textAlign: "center" }}>
                              No products found for this order.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </Table>

                    {/* Shipping & Total Summary */}
                    <div className="mt-3">
                      <h6
                        style={{ fontSize: "26px", letterSpacing: "1px" }}
                        className="h6-shipping"
                      >
                        <strong>SHIPPING ADDRESS</strong>
                      </h6>
                      <p style={{ fontSize: "18px" }} className="p-address">
                        {order.address}
                      </p>
                      <hr />
                      <div
                        className="d-flex justify-content-between total-orderinvoice"
                        style={{ fontSize: "24px", letterSpacing: "1px" }}
                      >
                        <span>SUB TOTAL</span>{" "}
                        <strong>Rs {order.subtotal.toFixed(2)}</strong>
                      </div>
                      <div
                        className="d-flex justify-content-between"
                        style={{ fontSize: "24px", letterSpacing: "1px" }}
                      >
                        <span>SHIPPING</span>{" "}
                        <strong>Rs {order.shipping.toFixed(2)}</strong>
                      </div>
                      <div
                        className="d-flex justify-content-between"
                        style={{ fontSize: "24px", letterSpacing: "1px" }}
                      >
                        <span>TAX</span>{" "}
                        <strong>Rs {order.tax.toFixed(2)}</strong>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <h5
                          style={{ fontSize: "26px", letterSpacing: "1px" }}
                        >
                          <strong>AMOUNT PAID</strong>
                        </h5>
                        <h5
                          style={{ fontSize: "26px", letterSpacing: "1px" }}
                        >
                          <strong>Rs {order.total.toFixed(2)}</strong>
                        </h5>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          )
        ) : (
          <p style={{ textAlign: "center", fontSize: "24px" }}>
            Please log in to view your order history.
          </p>
        )}
      </div>
    </>
  );
}