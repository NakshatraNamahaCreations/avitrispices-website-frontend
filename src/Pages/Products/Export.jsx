import { Container } from "react-bootstrap";
import Navbar_Menu from "../../Components/Navbar_Menu";
import LearnMore from "../../Pages/Home/LearnMore";
import Footer from "../../Components/Footer";
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
        <Container className="my-5">
  <div className="mx-auto px-3" style={{ maxWidth: "960px", fontFamily: "kapraneue, sans-serif" ,margin: "12% 20% 10% 20%"  }}>
    <h1
      className="fw-bold text-center mb-5"
      style={{
        fontSize: "56px",
        letterSpacing: "2px",
        color: "#111",
      }}
    >
      OUR GLOBAL PARTNERS
    </h1>

    {[
      {
        title: "Export with Avitri Spices",
        content: (
          <>
            <p>
              India’s Finest Spices — Professionally Processed. Globally Delivered.
            </p>
            <p>
              At Avitri Spices, we redefine spice exports with consistency, innovation, and uncompromising quality.
              Based in Bangalore, India, we cater to food businesses, wholesalers, private labels, and distributors
              across the world with expertly processed whole spices, powders, and proprietary blends.
            </p>
            <p>
              Trusted by major Indian and global brands — we're ready to bring the same excellence to your business.
            </p>
          </>
        ),
      },
      {
        title: "Whole Spices",
        content: (
          <ul>
            <li>Black Pepper (Whole, Crushed, Flakes)</li>
            <li>White Pepper</li>
            <li>Green & Black Cardamom</li>
            <li>Cloves, Nutmeg, Mace</li>
            <li>Cinnamon (Ceylon & Cassia), Split Cassia</li>
            <li>Star Anise, Dry Ginger, Stone Flower</li>
            <li>Amchur, Kapok Buds, Caraway Seeds</li>
            <li>Cumin Seeds, Turmeric Fingers, Coriander Seeds</li>
          </ul>
        ),
      },
      {
        title: "Ground Spices",
        content: (
          <ul>
            <li>Black/White Pepper Powder</li>
            <li>Clove, Cinnamon, Cumin, Coriander</li>
            <li>Turmeric, Ginger, Chilli</li>
            <li>Amchur, Stone Flower Powder</li>
          </ul>
        ),
      },
      {
        title: "Traditional Indian Masala Blends",
        content: (
          <ul>
            <li>Garam Masala, Chole Masala, Biryani Masala, Pav Bhaji Masala</li>
            <li>Sambar Powder, Rasam Powder, Curry Powder</li>
            <li>Kitchen King Masala, Tandoori Masala</li>
            <li>Meat Masala, Fish Masala</li>
          </ul>
        ),
      },
      {
        title: "Global & Fusion Blends",
        content: (
          <ul>
            <li>Taco Seasoning, Fajita Seasoning</li>
            <li>New Orleans Creole, Chinese Five Spice</li>
            <li>Peri Peri, Cajun, BBQ Rub, Pasta Seasoning</li>
            <li>Mexican Chilli Blend</li>
          </ul>
        ),
      },
      {
        title: "DIY Spice Kits",
        content: (
          <>
            <p>
              First-in-market dry-roasted kits for retail, gifting, and eCommerce. Each kit yields 150g spice powder with step-by-step guides.
            </p>
            <ul>
              <li>Garam Masala, Chole, Biryani, Butter Paneer</li>
              <li>Pav Bhaji, Rasam, Curry Powder</li>
              <li>Taco, Creole, Chinese Five Spice</li>
            </ul>
            <p><strong>All Kits Are:</strong></p>
            <ul>
              <li>Pre-measured and dry roasted</li>
              <li>Steam-sterilized and export compliant</li>
              <li>Packaged in kraft/printed boxes</li>
              <li>Customisable design & language</li>
            </ul>
          </>
        ),
      },
      {
        title: "Processing Facility",
        content: (
          <ul>
            <li>Bangalore, India — 30,000 sq.ft unit</li>
            <li>Destoners, Graders, Gravity Separators</li>
            <li>Colour Sorters, Metal Detectors</li>
            <li>Steam Sterilization, Precision Blenders</li>
            <li>Auto Packaging, In-house Lab</li>
            <li>Certifications: FSSAI, HACCP, USFDA, EU, Codex</li>
          </ul>
        ),
      },
      {
        title: "Global Shipping & Logistics",
        content: (
          <ul>
            <li>Incoterms: FOB, CIF, DDP</li>
            <li>Flexible MOQs for private labels</li>
            <li>Multilingual labelling, barcoded packaging</li>
            <li>Markets: North America, Europe, Australia, Middle East, Africa, Southeast Asia</li>
          </ul>
        ),
      },
      {
        title: "Partner With Us",
        content: (
          <>
            <p>
              Distributors, importers, private label brands, and gourmet chains —
              we promise quality, innovation, and service excellence.
            </p>
            <ul>
              <li>Authentic Indian Flavour</li>
              <li>Clean, Food-Safe Processing</li>
              <li>Custom Packaging & Fast Turnaround</li>
              <li>Transparent Pricing & Traceability</li>
            </ul>
            <p>
              <strong>Email:</strong> admin@avitrispices.in<br />
              <strong>Phone / WhatsApp:</strong> +91-7349444419<br />
              <strong>Factory Visit:</strong> By appointment, Bangalore
            </p>
          </>
        ),
      },
    ].map((section, idx) => (
      <div
        key={idx}
        className="p-4 my-4 text-white"
        style={{
          background: "#111",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          fontFamily: "kapraneue, sans-serif",
        }}
      >
        <h3 className="fw-bold mb-3">{section.title}</h3>
        <div style={{ fontSize: "16px", lineHeight: "1.7" }}>{section.content}</div>
      </div>
    ))}
  </div>
</Container>



        <LearnMore />
        <Footer />
      </div>
    </>
  );
}
