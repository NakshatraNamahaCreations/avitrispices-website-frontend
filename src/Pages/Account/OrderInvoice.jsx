import { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function OrderInvoice() {
  const [expandedRow, setExpandedRow] = useState(null);
  const orders = [
    {
      id: 66541324,
      title: "ORDER INVOICE",
      products: [
        {
          name: "DIY RASAM POWDER KIT",
          price: 175,
          oldPrice: 200,
          quantity: 1,
        },
        { name: "WHITE PEPPER", price: 200, oldPrice: 210, quantity: 1 },
      ],
      address:
        "1st floor, Darshan Plazza, Dwaraka Nagar, Banashankari, 6th Stage 1st Block, Channasandra, Bengaluru, Karnataka - 560061",
      subtotal: 375,
      shipping: 50,
      tax: 50,
      total: 475,
    },
  ];

  // Toggle row expansion
  const toggleRow = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <>
      <div style={{ margin: "10% 0 2% 0", fontFamily: "kapraneue, sans-serif" }}>
        {orders.map((order) => (
          <div key={order.id} className="mb-3">
            {/* Order Header Button */}
            <Button
              variant="light"
              className="w-100 text-start d-flex justify-content-between align-items-center p-3"
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
                className="p-3 mt-2"
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  background: "#fff",
                }}
              >
                <div className="d-flex justify-content-between">
                  <h5 style={{ letterSpacing: "1px", fontSize: "26px" }}>
                    {order.title}
                  </h5>
                  <Button
                    variant="link"
                    style={{
                      textDecoration: "underline",
                      letterSpacing: "1px",
                      fontSize: "22px",
                    }}
                  >
                    DOWNLOAD
                  </Button>
                </div>

                {/* Product Table */}
                <Table bordered>
                  <thead>
                    <tr style={{ letterSpacing: "1px", fontSize: "24px" }}>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.products.map((product, index) => (
                      <tr key={index}>
                        <td style={{ letterSpacing: "1px", fontSize: "18px" }}>
                          <div>
                            <strong>{product.name}</strong> <br />
                            <span
                              style={{
                                textDecoration: "line-through",
                                color: "red",
                              }}
                            >
                              Rs {product.oldPrice}
                            </span>
                          </div>
                        </td>
                        <td>{product.quantity}</td>
                        <td>
                          <strong>Rs {product.price}</strong>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>

                {/* Shipping & Total Summary */}
                <div className="mt-3">
                  <h6 style={{ fontSize: "26px", letterSpacing: "1px" }}>
                    <strong>SHIPPING ADDRESS</strong>
                  </h6>
                  <p style={{ fontSize: "18px" }}>{order.address}</p>
                  <hr />
                  <div
                    className="d-flex justify-content-between"
                    style={{ fontSize: "24px", letterSpacing: "1px" }}
                  >
                    <span>SUB TOTAL</span> <strong>Rs {order.subtotal}</strong>
                  </div>
                  <div
                    className="d-flex justify-content-between"
                    style={{ fontSize: "24px", letterSpacing: "1px" }}
                  >
                    <span>SHIPPING</span> <strong>Rs {order.shipping}</strong>
                  </div>
                  <div
                    className="d-flex justify-content-between"
                    style={{ fontSize: "24px", letterSpacing: "1px" }}
                  >
                    <span>TAX</span> <strong>Rs {order.tax}</strong>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <h5 style={{ fontSize: "26px", letterSpacing: "1px" }}>
                      <strong>AMOUNT PAID</strong>
                    </h5>
                    <h5 style={{ fontSize: "26px", letterSpacing: "1px" }}>
                      <strong>Rs {order.total}</strong>
                    </h5>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
