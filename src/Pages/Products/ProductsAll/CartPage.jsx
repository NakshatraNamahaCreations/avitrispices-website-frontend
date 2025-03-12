import { useSelector } from "react-redux";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <p>Price: {item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}
