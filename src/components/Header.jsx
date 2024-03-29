import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';

const Header = () => {
const [loginBtn, setLoginBtn] = useState("Login");
    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL}></img>
            </div>
            <div className="nav-bar">
                <ul>
                  <li>Home</li> 
                  <li>About</li>  
                  <li>Contact</li>  
                  <li>cart</li> 
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