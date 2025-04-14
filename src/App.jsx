import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
// import ProductAll from "./Pages/Products/ProductAll";
import ShippingPolicy from "./Components/ShippingPolicy";
import TermsServices from "./Components/TermsServices";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import RefundPolicy from "./Components/RefundPolicy";
import Recipes from "./Components/Recipes";
import RecipesGrid from "./Components/RecipesGrid";
import ProductPage from "./Components/RecipesPage";
import GroundSpices from "./Pages/Products/Ground_Spices/GroundSpices";
import GroundSpicesPage from "./Pages/Products/Ground_Spices/GroundSpicePage";
import WholeSpices from "./Pages/Products/Whole_Spices/WholeSpices";
import WholeSpicesPage from "./Pages/Products/Whole_Spices/WholeSpicesPage";
import DiySpices from "./Pages/Products/Diy_Spices/DiySpices";
import DiySpicesPage from "./Pages/Products/Diy_Spices/DiySpicesPage";
import RetailSpices from "./Pages/Products/Retails/RetailSpices";
import RetailSpicesPage from "./Pages/Products/Retails/RetailSpicesPage";
import AllProducts from "./Pages/Products/ProductsAll/AllProducts";
import AllProductsPage from "./Pages/Products/ProductsAll/AllProductsPage";
import Cart from "./Pages/Cart/Cart";
import Login from "./Pages/Account/Login";
import Account from "./Pages/Account/Account";
import AccountForm from "./Pages/Account/AccountForm";
import AddressDetails from "./Pages/Account/AddressDetails";
import Register from "./Pages/Account/Register";
import ThankYou from "./Pages/Cart/ThankYou";
import CheckOut from "./Pages/Cart/CheckOut";
import ContactUs from "./Components/Contact";
import WholeSale from "./Pages/Products/wholesale";
import Export from "./Pages/Products/Export";
import ResetPassword from "./Pages/Account/ResetPassword";
import Blogs from "./Pages/Products/Blogs";
import BlogDetails from "./Pages/Products/BlogDetails";
// import CartRedux from "./Pages/Cart/CartRedux";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/products" element={<ProductAll />} /> */}
      <Route path="/shipping" element={<ShippingPolicy />} />
      <Route path="/terms" element={<TermsServices />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/refund" element={<RefundPolicy />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes-grid" element={<RecipesGrid />} />

      <Route path="/ground-spices" element={<GroundSpices />} />
      <Route path="/ground-spices/:id" element={<GroundSpicesPage />} />

      <Route path="/whole-spices" element={<WholeSpices />} />
      <Route path="/whole-spices/:id" element={<WholeSpicesPage />} />

      <Route path="/diy-spices" element={<DiySpices />} />
      <Route path="/diy-spices/:id" element={<DiySpicesPage />} />

      <Route path="/retails" element={<RetailSpices />} />
      <Route path="/retails/:id" element={<RetailSpicesPage />} />

      <Route path="/all-products" element={<AllProducts />} />
      <Route path="/all-products/:id" element={<AllProductsPage />} />
      

      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/account" element={<Account />} />
      <Route path="/account-form" element={<AccountForm />} />
      <Route path="/address-details" element={<AddressDetails />} />

      <Route path="/product/:id" element={<ProductPage />} />

      <Route path="/wholesale" element={<WholeSale />} />
      <Route path="/export" element={<Export />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />


      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:title" element={<BlogDetails />} />

<Route path="contact" element={<ContactUs/>} />
      <Route path="/thank-you" element={<ThankYou />} />
      
    </Routes>
  );
}

export default App;
