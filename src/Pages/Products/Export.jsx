import { Container } from "react-bootstrap";
import Navbar_Menu from "../../Components/Navbar_Menu";
import LearnMore from "../../Pages/Home/LearnMore";
import Footer from "../../Components/Footer";
import { FaMapMarkerAlt, FaRuler, FaCogs, FaTruck, FaCheckCircle, FaEnvelope, FaPhoneAlt, FaHandshake  } from 'react-icons/fa';

import { useEffect, useState } from "react";

export default function Export() {
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
          <div className="mx-auto" style={{ maxWidth: "1000px", color: "#333" , marginTop:'4%'}}>
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
              OUR GLOBAL PARTNERS
            </h1>

            {/* Export with Avitri Spices */}
            <div className="row g-4 mb-4">
              <div className="col-md-12">
                <div className="p-4 border rounded-4 shadow-sm h-100">
                  <h4 className="mb-3 pb-2 border-bottom" style={{ fontSize: "26px", fontWeight: "600" }}>
                    Export with Avitri Spices
                  </h4>
                  <p style={{fontSize:'18px'}}>  India’s Finest Spices — Professionally Processed. Globally Delivered.</p>
                  <p style={{fontSize:'18px'}}>
                    At Avitri Spices, we redefine spice exports with consistency, innovation, and uncompromising quality.
                    Based in Bangalore, India, we cater to food businesses, wholesalers, private labels, and distributors
                    across the world with expertly processed whole spices, powders, and proprietary blends.
                  </p>
                  <p style={{fontSize:'18px'}}>
                    Trusted by major Indian and global brands — we're ready to bring the same excellence to your business.
                  </p>
                </div>
              </div>
            </div>

            {/* Spice Categories */}
            <div className="row g-4 mb-4">
              {/* Whole Spices */}
              <div className="col-md-6">
                <div className="p-4 border rounded-4 shadow-sm h-100">
                  <h6 className="fw-bold mb-3" style={{ fontSize: '28px' }}>Whole Spices</h6>
                  <ul className="d-flex flex-wrap gap-3" style={{ fontSize: "19px" , listStyleType:'none'}}>
                    <li>Black Pepper (Whole, Crushed, Flakes),</li>
                    <li>White Pepper,</li>
                    <li>Green & Black Cardamom,</li>
                    <li>Cloves, Nutmeg, Mace,</li>
                    <li>Cinnamon (Ceylon & Cassia), Split Cassia,</li>
                    <li>Star Anise, Dry Ginger, Stone Flower,</li>
                    <li>Amchur, Kapok Buds, Caraway Seeds,</li>
                    <li>Cumin Seeds, Turmeric Fingers, Coriander Seeds,</li>
                  </ul>
                </div>
              </div>

              {/* Ground Spices */}
              <div className="col-md-6">
                <div className="p-4 border rounded-4 shadow-sm h-100">
                  <h6 className="fw-bold mb-3" style={{ fontSize: '28px' }}>Ground Spices</h6>
                  <ul className="d-flex flex-wrap gap-3" style={{ fontSize: "19px", listStyleType:'none' }}>
                    <li>Black/White Pepper Powder,</li>
                    <li>Clove, Cinnamon, Cumin, Coriander,</li>
                    <li>Turmeric, Ginger, Chilli,</li>
                    <li>Amchur, Stone Flower Powder</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* More Spice Categories in Two Columns */}
            <div className="row g-4 mb-4">
              {/* Traditional Indian Masala Blends */}
              <div className="col-md-6">
                <div className="p-4 border rounded-4 shadow-sm h-100">
                  <h6 className="fw-bold mb-3" style={{ fontSize: '28px' }}>Traditional Indian Masala Blends</h6>
                  <ul className="d-flex flex-wrap gap-3" style={{ fontSize: "19px", listStyleType:'none' }}>
                    <li>Garam Masala, Chole Masala, Biryani Masala, Pav Bhaji Masala</li>
                    <li>Sambar Powder, Rasam Powder, Curry Powder</li>
                    <li>Kitchen King Masala, Tandoori Masala</li>
                    <li>Meat Masala, Fish Masala</li>
                  </ul>
                </div>
              </div>

              {/* Global & Fusion Blends */}
              <div className="col-md-6">
                <div className="p-4 border rounded-4 shadow-sm h-100">
                  <h6 className="fw-bold mb-3" style={{ fontSize: '28px' }}>Global & Fusion Blends</h6>
                  <ul className="d-flex flex-wrap gap-3" style={{ fontSize: "19px" , listStyleType:'none'}}>
                    <li>Taco Seasoning, Fajita Seasoning</li>
                    <li>New Orleans Creole, Chinese Five Spice</li>
                    <li>Peri Peri, Cajun, BBQ Rub, Pasta Seasoning</li>
                    <li>Mexican Chilli Blend</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* DIY Spice Kits */}
            <div className="row g-4 mb-4">
  <div className="col-12">
    <div className="p-4 border rounded-4 shadow-sm h-100">
      <h6 className="fw-bold mb-3" style={{ fontSize: '28px' }}>DIY Spice Kits</h6>
      <p style={{fontSize:'22px'}}  >
        First-in-market dry-roasted kits for retail, gifting, and eCommerce. Each kit yields 150g spice powder with step-by-step guides.
      </p>
      <ul className="d-flex flex-wrap gap-3" style={{ fontSize: "19px" , listStyleType:'none'}}>
        <li>Garam Masala, Chole, Biryani, Butter Paneer</li>
        <li>Pav Bhaji, Rasam, Curry Powder</li>
        <li>Taco, Creole, Chinese Five Spice</li>
      </ul>
      <p style={{fontSize:'22px'}}><strong>All Kits Are:</strong></p>
      <ul className="d-flex flex-wrap gap-3" style={{ fontSize: "19px", listStyleType:'none' }}>
        <li>Pre-measured and dry roasted</li>
        <li>Steam-sterilized and export compliant</li>
        <li>Packaged in kraft/printed boxes</li>
        <li>Customisable design & language</li>
      </ul>
    </div>
  </div>
</div>

<div className="mx-auto" style={{ maxWidth: "1000px", color: "#333" }}>

{/* Our Processing Facility Section */}
<div className="p-4 border rounded-4 shadow-sm mb-4">
  <h4 className="fw-bold mb-4" style={{ fontSize: '28px' }}>
    Our Processing Facility – Built for Export
  </h4>

  <div className="row g-4">
    {/* Location and Area */}
    <div className="col-md-6">
      <div className="d-flex align-items-center gap-3">
        <FaMapMarkerAlt size={30} className="text-danger" />
        <div>
          <h5 style={{ fontSize: '22px' }}>Location: Bangalore, India</h5>
          <p style={{ fontSize: '18px' }}>Area: 30,000 sq. ft.</p>
        </div>
      </div>
    </div>

    {/* Equipped With */}
    <div className="col-md-6">
      <div className="d-flex align-items-center gap-3">
        <FaCogs size={30} className="text-danger" />
        <div>
          <h5 style={{ fontSize: '22px' }}>Equipped With:</h5>
          <ul style={{ fontSize: '18px' }}>
            <li>Destoners, Graders, Gravity Separators</li>
            <li>Colour Sorters & Metal Detectors</li>
            <li>Steam Sterilization Units</li>
            <li>Precision Grinding & Blending Machines</li>
            <li>Automated Weighing & Packaging Lines</li>
            <li>In-house Quality Control & Lab Testing</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  {/* Compliant with Export Standards */}
  <div className="row g-4 mt-4">
    <div className="col-md-6">
      <div className="d-flex align-items-center gap-3">
        <FaCheckCircle size={20} className="text-success" />
        <div>
          <h5 style={{ fontSize: '22px' }}>Compliant with FSSAI, HACCP, USFDA, Codex & EU export standards</h5>
        </div>
      </div>
    </div>

    {/* Export Pack Sizes */}
    <div className="col-md-6">
      <div className="d-flex align-items-center gap-3">
        <FaTruck size={30} className="text-danger" />
        <div>
          <h5 style={{ fontSize: '22px' }}>Export Pack Sizes:</h5>
          <p style={{ fontSize: '18px' }}>10g sachets to 25kg bulk cartons</p>
        </div>
      </div>
    </div>
  </div>

  {/* Global Shipping & Logistics */}
  <div className="row g-4 mt-4">
    <div className="col-md-6">
      <div className="d-flex align-items-center gap-3">
        <FaTruck size={30} className="text-danger" style={{color:'red'}} />
        <div>
          <h5 style={{ fontSize: '22px' }}>Global Shipping & Logistics</h5>
          <ul style={{ fontSize: '18px' }}>
            <li>Incoterms supported: FOB | CIF | DDP</li>
            <li>Flexible MOQs for private labels & distributors</li>
            <li>Multilingual labelling & barcode-enabled</li>
            <li>Partnered with leading freight forwarders & inspection agencies</li>
            <li>Serving markets across North America, Europe, Australia, Middle East, Africa, and Southeast Asia</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  {/* Partner With Us */}
  <div className="row g-4 mt-4">
    <div className="col-md-12">
      <div className="d-flex align-items-center gap-3">
        <FaHandshake size={30} className="text-success" />
        <div>
          <h5 style={{ fontSize: '22px' }}>Partner with Us</h5>
          <p style={{ fontSize: '18px' }}>
            Whether you're a distributor, importer, private label brand, or gourmet chain, Avitri Spices offers unmatched service, reliability, and innovation. With every shipment, we promise:
          </p>
          <ul style={{ fontSize: '18px' }}>
            <li>Authentic Indian Flavour</li>
            <li>Clean, Food-Safe Processing</li>
            <li>Custom Packaging & Fast Turnaround</li>
            <li>Transparent Pricing & Full Traceability</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  {/* Contact Information */}
  <div className="mt-4">
    <p style={{ fontSize: '18px' }}>
      <strong>Email:</strong> <a href="mailto:admin@avitrispices.in" className="text-decoration-none">admin@avitrispices.in</a><br />
      <strong>Phone / WhatsApp:</strong> +91-7349444419<br />
      <strong>Factory Visit:</strong> Available by appointment – Bangalore, India
    </p>
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
