import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import SelectionCard from "/media/SelectionCard.png";
import garammasalacurry from "/media/garammasalacurry.png";
import PavBhaji from "/media/PavBhaji.png";
import PUNJABICHOLERECIPE from "/media/PUNJABICHOLERECIPE.png";
import biryani1 from "/media/biryani1.png";
import CHINESEFIVE from "/media/CHINESEFIVE.png";
import rasamsamber from "../../public/media/rasam picture.jpeg";
import BUTTERPANEERMASALA from "/media/BUTTERPANEERMASALA.png";
import ChickenCurry from "/media/ChickenCurry.png";
import VegetarianCurry from "/media/VegetarianCurry.png";
import CREOLESHRIMPPASTARECIPE from "/media/CREOLESHRIMPPASTARECIPE.png";
import VEGETARIANCREOLERICEBOWL from "/media/VEGETARIANCREOLERICEBOWL.png";
import taco from "/media/taco.png";

const products = [
  { id: 1, title: "GARAM MASALA CURRY", image: garammasalacurry, hasta: "#GaramMasalaCurry" },
  { id: 2, title: "PAV BHAJI", image: PavBhaji, hasta: "#ClassicPavBhaji" },
  { id: 3, title: "PUNJABI CHOLE RECIPE", image: PUNJABICHOLERECIPE, hasta: "#PunjabiChole" },
  { id: 4, title: "BIRYANI", image: biryani1, hasta: "#AuthenticBiryani" },
  { id: 5, title: "RASAM", image: rasamsamber, hasta: "#Rasam" },
  { id: 6, title: "BUTTER PANEER MASALA", image: BUTTERPANEERMASALA, hasta: "#ButterPannerMasala" },
  { id: 7, title: "TACO", image: taco, hasta: "#Taco" },
  { id: 8, title: "CHICKEN CURRY", image: ChickenCurry, hasta: "#ChickenCurry" },
  { id: 9, title: "VEGETARIAN CURRY", image: VegetarianCurry, hasta: "#VegetarianCurry" },
  { id: 10, title: "CHINESE FIVE SPICE STIR-FRY", image: CHINESEFIVE, hasta: "#ChineseFiveSpiceStirFry" },
  { id: 11, title: "CREOLE SHRIMP PASTA RECIPE", image: CREOLESHRIMPPASTARECIPE, hasta: "#CREOLESHRIMPPASTA" },
  { id: 12, title: "VEGETARIAN CREOLE RICE BOWL", image: VEGETARIANCREOLERICEBOWL, hasta: "#VEGETARIANCREOLERICEBOWL" },
];

export default function RecipesGrid() {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <Container fluid className="recipes-grid-container">
      <div className="recipes-grid">
        {products.map(({ id, title, image, hasta }) => (
          <Card
            key={id}
            className="recipe-card"
            onClick={() => handleCardClick(id)}
          >
            <Card.Title className="recipes-title-grid">{title}</Card.Title>

            <div className="recipe-image-container">
              <Card.Img variant="top" src={image} alt={title} className="img-recipes-grid" />
            </div>

            <Card.Body className="recipe-card-body">
              <div className="recipe-selection-container">
                <img src={SelectionCard} alt="SelectionCard-img" className="selection-card-img" />
                <h4 className="recipe-hasta">{hasta}</h4>
                <p className="recipe-text">RECIPES</p>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}
