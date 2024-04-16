import { Link } from 'react-router-dom';
import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';


const Header = () => {
const [loginBtn, setLoginBtn] = useState("Login");
    return (
        <div className="flex justify-between bg-gray-100">
            <div className="w-24">
                <img src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className='flex p-4 m-4'>
                  <li className='px-4'>
                    <Link to="/">Home</Link>
                  </li> 
                  <li className='px-4'>
                    <Link to="/about">About</Link>
                  </li>  
                  <li className='px-4'>
                    <Link to="/grocery">Grocery</Link>
                  </li> 
                  <li className='px-4'>
                    <Link to="/contact">Contact Us</Link>
                  </li>  
                  <li className='px-4'>cart</li> 
                  <button
                  onClick={()=>{
                    loginBtn === 'Login'? setLoginBtn("Logout"):setLoginBtn("Login");
                  }}
                  >
                    {loginBtn}
                  </button>    
                </ul>
            </div>
        </div>
    );
}

export default Header;