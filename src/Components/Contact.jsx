import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar_Menu from './Navbar_Menu';
import LearnMore from '../Pages/Home/LearnMore';
import Footer from './Footer';
import axios from "axios";
import { Link } from 'react-router-dom'; 
import { BsWhatsapp } from 'react-icons/bs'; 



const ContactUs = () => {

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.post("https://api.nncwebsitedevelopment.com/api/contact-form", formData); // Update URL if deployed
      alert("Message sent successfully!");
      // setFormData({
      //   firstName: "",
      //   lastName: "",
      //   email: "",
      //   phoneNumber: "",
      //   message: "",
      // });
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Please try again.");
    }
  };
  


  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        className="page-content"
        style={{
          opacity: isVisible ? 1 : 0,
          // overflow:'hidden',
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <Navbar_Menu />
        <div className="container py-5" style={{ marginTop: '5%',   fontFamily: "kapraneue, sans-serif", }}>
          <h2 className="text-center fw-bold mb-5">CONTACT US</h2>
          <div className="row text-center mb-5">
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm p-3" style={{height:'100%'}}>
                <div className="mb-3">
                  <i className="bi bi-geo-alt-fill fs-1 text-danger"></i>
                </div>
                <h5 className="fw-bold">ADDRESS</h5>
                <p>24/2, Yantaganahalli,<br />Karnataka 562123</p>
              </div>
            </div>

            <div className="col-md-4 mb-4" >
              <div className="card shadow-sm p-3" style={{height:'100%'}}>
                <div className="mb-3">
                  <i className="bi bi-telephone-fill fs-1 text-danger"></i>
                </div>
                <h5 className="fw-bold">CALL US</h5>
                <p>073494 44419</p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card shadow-sm p-3" style={{height:'100%'}}>
                <div className="mb-3">
                  <i className="bi bi-envelope-fill fs-1 text-danger"></i>
                </div>
                <h5 className="fw-bold">EMAIL US</h5>
                <p>admin@avitrispices.in</p>
              </div>
            </div>
            
          </div>

          {/* <div className="row">
  <div className="col-md-12">
    <div className="card shadow-sm p-4 rounded" style={{ backgroundColor: "#fff" }}>
      <form>
        <div className="row g-3">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="First name" />
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Last name" />
          </div>
          <div className="col-md-12">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="col-md-12 input-group">
            <select className="form-select" style={{ maxWidth: "80px" }}>
              <option>+91</option>
            </select>
            <input type="tel" className="form-control" placeholder="Phone number" />
          </div>
          <div className="col-md-12">
            <textarea className="form-control" rows="5" placeholder="Send message"></textarea>
          </div>
          <div className="col-md-12 text-center">
            <button type="submit" className="btn btn-dark px-5 py-2">SUBMIT</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div> */}

<form onSubmit={handleSubmit}>
  <div className="row g-3 shadow-sm p-4 rounded" style={{ backgroundColor: "#fff" }}>
    <div className="col-md-6" >
      <input
        type="text"
        className="form-control"
        name="firstName"
        placeholder="First name"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
    </div>
    <div className="col-md-6">
      <input
        type="text"
        className="form-control"
        name="lastName"
        placeholder="Last name"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
    </div>
    <div className="col-md-12">
      <input
        type="email"
        className="form-control"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>
    <div className="col-md-12 input-group">
      <select className="form-select" style={{ maxWidth: "80px" }} disabled>
        <option>+91</option>
      </select>
      <input
        type="tel"
        className="form-control"
        name="phoneNumber"
        placeholder="Phone number"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
      />
    </div>
    <div className="col-md-12">
      <textarea
        className="form-control"
        name="message"
        rows="5"
        placeholder="Send message"
        value={formData.message}
        onChange={handleChange}
        required
      />
    </div>
    <div className="col-md-12 text-center">
      <button type="submit" className="btn btn-dark px-5 py-2">SUBMIT</button>
    </div>
  </div>
</form>


        </div>
        
        <LearnMore />
        <Footer />
        <Link
  to="https://api.whatsapp.com/send/?phone=917349444419"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-float"
>
  <BsWhatsapp size={30} />
</Link>

      </div>
    </>
  );
};

export default ContactUs;