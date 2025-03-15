import Navbar_Menu from "../../Components/Navbar_Menu";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import LearnMore from "../Home/LearnMore";
import Footer from "../../Components/Footer";
import AccountForm from "./AccountForm";
import OrderDetails from "./OrderDetails";
import AddressDetails from "./AddressDetails";

export default function Account() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTab, setSelectedTab] = useState("General");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div
        className="page-content"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <Navbar_Menu />

        <div style={{ margin: "12% 20% 10% 20%" }} className="div-account">
          <h1
            style={{
              lineHeight: "1.5",
              letterSpacing: "3px",
              fontSize: "75px",
              maxWidth: "100%",
              fontWeight: "bold",
              fontFamily: "kapraneue, sans-serif",
              textAlign: "center",
              marginBottom: "5%",
            }}
            className="account-h1"
          >
            ACCOUNT
          </h1>

          {/* ACCOUNT FORM */}

          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                fontFamily: "kapraneue, sans-serif",
               
              }}
            >
              {["General", "Order Details", "Your Address"].map((tab) => (
                <Button
                  key={tab}
                  style={{
                    padding: "10px 20px",
                    fontSize: "28px",
                    letterSpacing: "1px",
                    fontWeight: "bold",
                    backgroundColor: selectedTab === tab ? "#AF261D" : "white",
                    border: "none",
                    color: selectedTab === tab ? "white" : "black",
                    transition:
                      "background-color 0.3s ease, transform 0.2s ease",
                  }}
                  className="gen-order-address-btn"
                  onClick={() => setSelectedTab(tab)}
                >
                  {tab}
                </Button>
              ))}
            </div>
            {/* Show AccountForm only if "General" is selected */}
            {selectedTab === "General" && <AccountForm />}
            {selectedTab === "Order Details" && <OrderDetails />}
            {selectedTab === "Your Address" && <AddressDetails />}
          </div>
        </div>
      </div>
      <LearnMore />
      <Footer />
    </>
  );
}
