import { useSelector, useDispatch } from "react-redux";
// import { removeFromCart, updateQuantity } from "../redux/cartSlice";
import { removeFromCart, updateQuantity } from "../../redux/cartSlice";

export default function CartRedux() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? <p>Cart is empty</p> : (
        cartItems.map(item => (
          <div key={item.id}>
            <img src={item.image} alt={item.title} width="100" />
            <h3>{item.title}</h3>
            <p>Price: {item.price}</p>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))}
              min="1"
            />
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}
