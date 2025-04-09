import Navbar_Menu from "./Navbar_Menu";
import { Container } from "react-bootstrap";
import RecipesGrid from "./RecipesGrid";
import { useEffect, useState } from "react";
import LearnMore from "../Pages/Home/LearnMore";
import Footer from "./Footer";

export default function Recipes() {
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

      {/* RECIPES */}

      <div style={{ backgroundColor: "#B0261E", padding: "10px" }} >
        <Container>
          <div style={{ margin: "10% 0% 5% 0%" }} className="div-recpies">
            <h1
              style={{
                // lineHeight: "1.5",
                letterSpacing: "1px",
                fontSize: "75px",
                maxWidth: "100%",
                fontWeight: "bold",
                fontFamily: "kapraneue, sans-serif",
                textAlign: "center",
                color: "white",
              }}
              className="h1-recipes"
            >
              {/* Super-Spicy Recipes: */}
              Spice It Up with Avitri - Recipes that Inspire!
            </h1>
            {/* <p
              style={{
                fontSize: "30px",
                letterSpacing: "1px",
                textTransform: "capitalize",
                color: "white",
                textAlign: "center",
              }}
            >
              
            </p> */}
          </div>
          <div>
            <RecipesGrid />
          </div>
        </Container>
      </div>
      <LearnMore />

      {/* FOOTER */}
      <Footer />
      </div>
    </>
  );
}
