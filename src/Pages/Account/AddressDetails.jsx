import AddressForm from "./AddressForm.jsx";
import { useState, useEffect } from "react";
import { Container, Card, Form } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import Vector from "/media/Vector.png";
import axios from "axios";

export default function AddressDetails() {
  const [addresses, setAddresses] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
    const [selectedAddressId, setSelectedAddressId] = useState(null);
  const navigate = useNavigate();

  
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user && user.email) {
      fetchAddresses();
    }
  }, [user]);

  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    phoneCode: "+91",
    phoneNumber: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    pincode: "",
    region: "",
  });
  

  const handleAddressSubmit = async (e) => {
    e.preventDefault(); 

    if (!validateForm()) {
        console.error("Form validation failed:", errors);
        return;
    }

    try {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (!storedUser || !storedUser.id) {
            setError("User ID is missing. Cannot save address.");
            return;
        }

        setLoading(true);
        setSuccess("");

        const payload = {
            userId: storedUser.id,  
            firstName: address.firstName,
            lastName: address.lastName,
            phoneNumber: address.phoneNumber,
            address: address.address1 + ", " + address.address2,
            city: address.city,
            state: address.state,
            pincode: address.pincode,
            country: "India",
            email: storedUser.email,
        };

        console.log("Sending Address Data:", payload);

        const response = await axios.post(
            "https://api.nncwebsitedevelopment.com/api/shipping-address", 
            payload, 
            { headers: { "Content-Type": "application/json" } }
        );

        console.log("Address successfully added:", response.data);
        setSuccess("Address added successfully!");
        setLoading(false);

        const newAddress = response.data.shippingAddress;
        
        
        setAddresses((prev) => [...prev, newAddress]);
        setSelectedIndex((prev) => prev + 1);  

    } catch (error) {
        console.error("Error adding address:", error.response?.data || error.message);
        setErrors({ server: `Failed to add address: ${error.response?.data?.message || "Please try again."}` });
        setLoading(false);
    }
};





  const handleSelectChange = (event) => {
    setSelectedIndex(Number(event.target.value));
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };



  const fetchAddresses = async () => {
    if (!user || !user.id) {
        console.error("Error: User not logged in!");
        return;
    }

    try {
        const response = await axios.get(`https://api.nncwebsitedevelopment.com/api/shipping-address/user/${user.id}`);

        if (response.status === 200 && response.data.length > 0) {
            
            if (addresses.length === 0) {
                setAddresses(response.data);
                
              
                if (!selectedAddressId) {
                    setSelectedAddressId(response.data[0]._id);
                    setSelectedIndex(0);
                }
            }
        } else {
            setAddresses([]); 
        }
    } catch (error) {
        console.error(" Error fetching addresses:", error.response?.data || error.message);
    }
};


useEffect(() => {
  if (user && user.id) {
      fetchAddresses(); 
  }
}, []); 

  return (
    <Container>
      {/* Address Selection Dropdown */}
      {addresses.length > 0 && (
        <Form.Group
          className="mt-3 p-4"
          style={{
            fontFamily: "kapraneue, sans-serif",
            letterSpacing: "1px",
            border: "1px solid black",
            borderRadius: "10px",
          }}
        >
          <Form.Label>
            <strong>Select Address:</strong>
          </Form.Label>
          <Form.Control
            as="select"
            style={{ fontFamily: "kapraneue, sans-serif", letterSpacing: "1px" }}
            onChange={handleSelectChange}
            value={selectedIndex ?? ""}
          >
            <option value="">Choose an address</option>
            {addresses.map((address, index) => (
              <option key={index} value={index}>
                {address.city}, {address.state}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      )}

      {/* Shipping Address Section */}
      <Card
  className="mt-4 p-3 card-shippingaddress"
  style={{
    fontFamily: "kapraneue, sans-serif",
    letterSpacing: "1px",
    border: "1px solid black",
  }}
>
  <h5 style={{ fontSize: "32px", letterSpacing: "1px" }} className="h5-shipping-addressdetails">
    SHIPPING ADDRESS
  </h5>
  {selectedIndex !== null && addresses.length > 0 ? (
    <p>
     {addresses[selectedIndex]?.firstName} {addresses[selectedIndex]?.lastName} <br />
      {addresses[selectedIndex]?.phoneCode} {addresses[selectedIndex]?.phoneNumber} <br />
     {addresses[selectedIndex]?.address} <br />
       {addresses[selectedIndex]?.city} <br />
    {addresses[selectedIndex]?.state} - {addresses[selectedIndex]?.pincode}
    </p>
  ) : (
    <p className="p-shipping-addressdetails">No shipping address selected.</p>
  )}
</Card>


      {/* Add Address Form */}

      {/* <AddressForm onSubmit={handleAddressSubmit} /> */}
      <AddressForm 
  onSubmit={handleAddressSubmit} 
  setAddresses={setAddresses} 
  setSelectedIndex={setSelectedIndex} 
/>


      {/* Logout Button */}
      <div
        style={{
          position: "relative",
          width: "fit-content",
          maxWidth: "90%",
          height: "70px",
          margin: "5% auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={handleLogout}
      >
        <img
          src={Vector}
          alt="Vector-img"
          style={{
            width: "100%",
            height: "100%",
            display: "block",
          }}
        />
        <h3
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "28px",
            fontWeight: "bold",
            letterSpacing: "2px",
            color: "white",
            padding: "5px",
            borderRadius: "5px",
            fontFamily: "kapraneue, sans-serif",
            whiteSpace: "nowrap",
          }}
        >
          LOGOUT
        </h3>
      </div>
    </Container>
  );
}
