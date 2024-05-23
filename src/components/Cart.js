import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();

  const handleclearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-2 m-2">
      <h1 className="text-center font-bold text-3xl">Cart</h1>

      <div className="w-6/12 m-auto">
        {cartItems.length !== 0 ? (
          <button
            onClick={handleclearCart}
            className=" bg-black text-white rounded-lg p-3"
          >
            Clear Cart
          </button>
        ) : (
          <h2 className=" text-center font-bold">
            Your cart is empty add items
          </h2>
        )}

        <ItemList list={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
