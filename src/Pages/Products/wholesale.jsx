import { Container } from "react-bootstrap";
import Navbar_Menu from "../../Components/Navbar_Menu";
import LearnMore from "../../Pages/Home/LearnMore";
import Footer from "../../Components/Footer";
import { useEffect, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

export default function WholeSale() {

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
      <Container fluid className="py-5 px-3 px-md-5" style={{ fontFamily: "kapraneue, sans-serif" ,fontSize: "18px",}}>
        <div style={{marginTop:'5%'}}>
      <h1
        style={{
          fontSize: "60px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "40px",
          letterSpacing: "1.5px",
          color: "#222",
        }}
      >
        WHOLESALE
      </h1>

      <div className="mx-auto" style={{ maxWidth: "1000px", color: "#333" ,}}>
        <p className="text-center fw-semibold mb-4 " style={{fontSize:'28px'}}>
          Wholesale Spices – India<br />
          Supplying India’s Trusted Spice Brands, Retailers & Food Businesses.
        </p>

        <p style={{fontSize:'24px'}}>
          At Avitri Spices, we are proud to be the manufacturing partner behind some of India’s most respected spice labels—
          including MTR, Eastern, ITC, Catch Masala, Bharat Masala, DMart, Reliance Retail, and more. With deep-rooted expertise
          in spice processing and blending, we now offer wholesale supply directly to retail chains, regional brands, repackers,
          HoReCa suppliers, and food processing units across India.
        </p>

        {/* Product Categories */}
        <h4 className="mt-5 mb-3">Wholesale Spice Range</h4>

        <div className="row gy-4">
          {/* Whole Spices */}
          <div className="col-md-6">
            <div className="p-4 border rounded-4 shadow-sm h-100" style={{fontSize:'24px'}}>
              <h6 className="fw-bold mb-3 " style={{fontSize:'28px'}}>Whole Spices</h6>
              <ul className="mb-0">
                <li>Black Pepper (Whole, Crushed, Flakes)</li>
                <li>White Pepper</li>
                <li>Green Cardamom</li>
                <li>Black Cardamom</li>
                <li>Cloves, Nutmeg, Mace (Javitri)</li>
                <li>Cinnamon (Ceylon & Cassia), Split Cassia</li>
                <li>Star Anise, Dry Ginger, Stone Flower (Dagad Phool)</li>
                <li>Amchur Slices, Kapok Buds, Caraway Seeds</li>
                <li>Cumin Seeds, Coriander Seeds, Turmeric Fingers</li>
              </ul>
            </div>
          </div>

          {/* Ground Spices */}
          <div className="col-md-6">
            <div className="p-4 border rounded-4 shadow-sm h-100" style={{fontSize:'24px'}}>
              <h6 className="fw-bold mb-3" style={{fontSize:'28px'}}>Ground Spices</h6>
              <ul className="mb-0">
                <li>Black Pepper, White Pepper, Clove, Cinnamon</li>
                <li>Ginger, Turmeric, Coriander, Cumin</li>
                <li>Red Chilli, Amchur, Stone Flower Powder</li>
              </ul>
            </div>
          </div>

          {/* Blended Masalas */}
          <div className="col-md-6">
            <div className="p-4 border rounded-4 shadow-sm h-100" style={{fontSize:'24px'}}>
              <h6 className="fw-bold mb-3" style={{fontSize:'28px'}}>Blended Masalas</h6>
              <ul className="mb-0">
                <li>Garam Masala, Chole Masala, Biryani Masala</li>
                <li>Butter Paneer Masala, Pav Bhaji Masala</li>
                <li>Sambar Powder, Rasam Powder, Curry Powder</li>
                <li>Kitchen King, Meat Masala, Fish Masala, Tandoori Masala</li>
              </ul>
            </div>
          </div>

          {/* International Blends */}
          <div className="col-md-6">
            <div className="p-4 border rounded-4 shadow-sm h-100" style={{fontSize:'24px'}}>
              <h6 className="fw-bold mb-3" style={{fontSize:'28px'}}>International Spice Blends</h6>
              <ul className="mb-0">
                <li>Taco Seasoning, Fajita Seasoning, Creole (Carole)</li>
                <li>Chinese Five Spice, Peri Peri, BBQ Rub</li>
                <li>Pasta Masala, Mexican Chilli Blend</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ fontSize: "18px", lineHeight: "1.8", color: "#333" }} className="mt-5">

{/* Row 1: Packaging + Why Avitri */}
<div className="row g-4 mb-4">
<div className="col-md-6">
    <div className="p-4 rounded-4 shadow-lg border bg-white h-100">
      <h4 className="mb-3 pb-2 border-bottom" style={{ fontSize: "26px", fontWeight: "600", color: "#333" }}>
        Packaging Options
      </h4>
      <p className="text-muted" style={{ fontSize: "18px", lineHeight: "1.6" }}>
        We offer flexible wholesale packaging tailored to your needs:
      </p>
      <ul className="mb-0" style={{ fontSize: "18px" }}>
        <li>Retail Packs: 10g to 500g</li>
        <li>Food Service Packs: 1kg to 5kg</li>
        <li>Bulk Packs: 10kg to 25kg</li>
        <li>Private Labelling with regional language & barcode</li>
      </ul>
    </div>
  </div>

  {/* Why Avitri Spices Box */}
  <div className="col-md-6">
    <div className="p-4 rounded-4 shadow-lg border bg-white h-100">
      <h4 className="mb-3 pb-2 border-bottom" style={{ fontSize: "26px", fontWeight: "600", color: "#333" }}>
         Why Avitri Spices?
      </h4>
      <ul className="mb-0" style={{ fontSize: "18px" }}>
        <li>30,000 sq. ft. FSSAI-approved facility</li>
        <li>In-house sterilization, sorting & lab testing</li>
        <li>Fast turnaround & consistent quality</li>
        <li>Export-compliant, food-safe production lines</li>
      </ul>
    </div>
  </div>
</div>

{/* Row 2: Ideal For + Logistics */}
<div className="row g-4 mb-4">
  <div className="col-md-6">
    <div className="p-4 rounded-4 shadow-sm border bg-white h-100">
      <h4 className="mb-3 pb-2 border-bottom" style={{ fontSize: "26px", fontWeight: "600" }}> Ideal For</h4>
      <ul className="mb-0">
        <li>Repackers / Brand Owners</li>
        <li>Supermarkets, Kirana Stores, FMCG Startups</li>
        <li>HoReCa Distributors, Traders, Regional Brands</li>
      </ul>
    </div>
  </div>

  <div className="col-md-6">
    <div className="p-4 rounded-4 shadow-sm border bg-white h-100">
      <h4 className="mb-3 pb-2 border-bottom" style={{ fontSize: "26px", fontWeight: "600" }}> Logistics & Reach</h4>
      <ul className="mb-0">
        <li>PAN India delivery</li>
        <li>Factory Dispatch: Bangalore</li>
        <li>GST-Compliant Billing</li>
        <li>Minimum Order: ₹50,000</li>
      </ul>
    </div>
  </div>
</div>

{/* Final Box: Let's Work Together */}
<div className="p-4 rounded-4 shadow-sm border bg-white mb-5">
  <h4 className="mb-3 pb-2 border-bottom" style={{ fontSize: "26px", fontWeight: "600" }}> Let’s Work Together</h4>
  <p>
    Whether you're launching your own label or stocking a retail chain,
    <strong> Avitri Spices</strong> is your trusted partner in purity, precision, and product innovation.
  </p>

  <div className="row mt-4 gx-4 gy-3">
  <div className="col-md-6">
    <div className="d-flex gap-2">
      <FaPhoneAlt className="text-danger" size={20} />
      <span className="fw-bold">Phone / WhatsApp:</span>
      <span>+91-7349444419</span>
    </div>
  </div>

  <div className="col-md-6">
    <div className="d-flex gap-2">
      <FaEnvelope className="text-danger" size={20} />
      <span className="fw-bold">Email:</span>
      <a href="mailto:admin@avitrispices.in" className="text-decoration-none" style={{color:'black'}}>admin@avitrispices.in</a>
    </div>
  </div>

  <div className="col-md-6">
    <div className="d-flex gap-2">
      <FaMapMarkerAlt className="text-danger" size={20} />
      <span className="fw-bold">Factory Address:</span>
      <span>24/2, Yantaganahalli, Karnataka 562123</span>
    </div>
  </div>

  <div className="col-md-6">
    <div className="d-flex gap-2">
      <FaCalendarAlt className="text-danger" size={20} />
      <span className="fw-bold">Visit:</span>
      <span>By appointment only</span>
    </div>
  </div>
</div>
</div>
</div>

        
      </div>
      </div>
    </Container>

      <LearnMore />
      <Footer />
      </div>
    </>
  );
}
