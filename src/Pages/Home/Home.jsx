import Navbar_Menu from "../../Components/Navbar_Menu";
import Footer from "../../Components/Footer";
import Choose from "./Choose";
import Collections from "./Collections";
import Spice_Kits from "./Spice_Kits";
import Products from "./Products";
import Reviews from "./Reviews";
import FoodCards from "./FoodCards";
import Advertising from "./Advertising";
import AdvertisingBottom from "./AdvertisingBottom";
import Banner from "./Banner";
import Nourished from "./Nourished";
import LearnMore from "./LearnMore";
import { useEffect, useState } from "react";

export default function Home() {
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
          overflow:'hidden'
        }}
      >
        {/* Navbar Top */}
        <Navbar_Menu />

        {/* Banner Advertising */}
        <Banner />

        {/* Advertising Lines */}
        <Advertising />

        {/* DIY Spice kits range */}
        <div style={{ backgroundColor: "#FBF9F4" }}>
          <Spice_Kits />
        </div>

        {/* Products */}

        <Products />
        <Nourished />

        {/* Advertising Lines */}
        <AdvertisingBottom />

        {/* Card Section */}
        <FoodCards />

        {/* Collections & Reviews */}
        <div>
          <Collections />
          <Reviews />
        </div>

        {/* Choose & Footer */}
        <div style={{ height: "100vh" }}>
          <Choose />
          <LearnMore />
          <Footer />
        </div>
      </div>
    </>
  );
}
