import { Container } from "react-bootstrap";
import Navbar_Menu from "../../Components/Navbar_Menu";
import LearnMore from "../../Pages/Home/LearnMore";
import Footer from "../../Components/Footer";
import { useEffect, useState } from "react";

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
          // overflow:'hidden'
        }}
      >
      {/* Navbar Top */}
      <Navbar_Menu />
      <Container>
  <div style={{ margin: "12% 20% 10% 20%", fontFamily: "kapraneue, sans-serif" }} className="div-terms text-white">
    <h1
      style={{
        lineHeight: "1.5",
        letterSpacing: "2px",
        fontSize: "75px",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: '5%',
        color: "#111",
      }}
      className="termsservice"
    >
      WHOLESALE
    </h1>

    <div
      style={{
        backgroundColor: "#111",
        padding: "40px",
        borderRadius: "16px",
        fontSize: "16px",
        lineHeight: "1.8",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      }}
    >
      <p className="text-center fw-bold mb-4">
        Wholesale Spices – India<br />
        Supplying India’s Trusted Spice Brands, Retailers & Food Businesses.
      </p>

      <p>
        At Avitri Spices, we are proud to be the manufacturing partner behind some of India’s most respected spice labels—
        including MTR, Eastern, ITC, Catch Masala, Bharat Masala, DMart, Reliance Retail, and more. With deep-rooted expertise
        in spice processing and blending, we now offer wholesale supply directly to retail chains, regional brands, repackers,
        HoReCa suppliers, and food processing units across India.
      </p>

      <h5 className="mt-4">Wholesale Spice Range</h5>
      <h6 className="mt-3">Whole Spices (Steam-Sterilized | Uniform Grades)</h6>
      <ul>
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

      <h6 className="mt-3">Ground Spices (Fine & Coarse Grind Options)</h6>
      <ul>
        <li>Black Pepper, White Pepper, Clove, Cinnamon</li>
        <li>Ginger, Turmeric, Coriander, Cumin</li>
        <li>Red Chilli, Amchur, Stone Flower Powder</li>
      </ul>

      <h6 className="mt-3">Blended Masalas</h6>
      <ul>
        <li>Garam Masala, Chole Masala, Biryani Masala</li>
        <li>Butter Paneer Masala, Pav Bhaji Masala</li>
        <li>Sambar Powder, Rasam Powder, Curry Powder</li>
        <li>Kitchen King, Meat Masala, Fish Masala, Tandoori Masala</li>
      </ul>

      <h6 className="mt-3">International Spice Blends (for Modern Trade / Retailers)</h6>
      <ul>
        <li>Taco Seasoning, Fajita Seasoning, Creole (Carole)</li>
        <li>Chinese Five Spice, Peri Peri, BBQ Rub</li>
        <li>Pasta Masala, Mexican Chilli Blend</li>
      </ul>

      <h5 className="mt-5">Packaging Options</h5>
      <p>We offer flexible wholesale packaging tailored to your needs:</p>
      <ul>
        <li>Retail Packs: 10g, 20g, 50g, 100g, 200g, 500g (sachets, zip locks)</li>
        <li>Food Service Packs: 1kg, 2kg, 5kg (stand-up pouches)</li>
        <li>Bulk Packs: 10kg, 15kg, 25kg HDPE-lined cartons</li>
        <li>Private Labelling: Fully customizable with printing, barcode, FSSAI number, and regional language support</li>
      </ul>

      <h5 className="mt-5">Why Avitri Spices?</h5>
      <ul>
        <li>30,000 sq. ft. FSSAI-approved facility in Bangalore</li>
        <li>In-house steam sterilization, sorting, and lab testing</li>
        <li>Consistent quality, uniform mesh size, no cross-contamination</li>
        <li>Ready stock of 25+ SKUs in both whole & ground form</li>
        <li>Fast turnaround time for bulk & private label orders</li>
        <li>Clean, food-safe, export-compliant production lines</li>
      </ul>

      <h5 className="mt-5">Ideal For</h5>
      <ul>
        <li>Repackers / Brand Owners</li>
        <li>Supermarkets & Kirana Chains</li>
        <li>HoReCa Distributors</li>
        <li>Spice Retailers / Traders</li>
        <li>FMCG Startups</li>
        <li>Regional Brands (Tier 2/3 Cities)</li>
      </ul>

      <h5 className="mt-5">Logistics & Reach</h5>
      <ul>
        <li>PAN India delivery via cargo</li>
        <li>Doorstep dispatch from Bangalore</li>
        <li>GST-compliant invoicing</li>
        <li>Minimum Order Value: ₹50,000 onwards</li>
      </ul>

      <h5 className="mt-5">Let’s Work Together</h5>
      <p>
        Looking to streamline your spice sourcing? Whether you're launching your own label or stocking a retail chain,
        Avitri Spices is your trusted partner in purity, precision, and product innovation.
      </p>

      <p className="mt-4">
        <strong>Phone / WhatsApp:</strong> +91-7349444419<br />
        <strong>Email:</strong> admin@avitrispices.in<br />
        <strong>Factory Address:</strong> 24/2, Yantaganahalli, Karnataka 562123<br />
        <strong>Visit:</strong> By appointment only
      </p>

      {/* <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
        <button className="btn btn-outline-light rounded-pill px-4 py-2">Request Samples</button>
        <button className="btn btn-outline-light rounded-pill px-4 py-2">Get a Wholesale Quote</button>
        <button className="btn btn-outline-light rounded-pill px-4 py-2">Download Catalogue</button>
      </div> */}
    </div>
  </div>
</Container>

      <LearnMore />
      <Footer />
      </div>
    </>
  );
}
