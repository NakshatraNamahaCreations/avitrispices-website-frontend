import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar_Menu from './Navbar_Menu';
import LearnMore from '../Pages/Home/LearnMore';
import Footer from './Footer';

const ContactUs = () => {

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);


  
  useEffect(() => {
    window.scrollTo(0, 0);
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

          <div className="row">
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
</div>

        </div>
        <LearnMore />
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;