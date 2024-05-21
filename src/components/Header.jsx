import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import userContext from "../utils/userContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const { loggedInUser } = useContext(userContext);

  //Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-gray-100">
      <div className="w-24">
        <img src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <ShoppingCartIcon />
            {cartItems.length}
          </li>
          <button
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
