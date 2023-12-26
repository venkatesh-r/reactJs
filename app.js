import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxPIeEEhgJRQsNLtDeCKPgDoiT4Q0x_7k4w1UWLNaWcOn89smKWTHOHRMP03BCS-74hE8&usqp=CAU"></img>
            </div>
            <div className="nav-bar">
                <ul>
                  <li>Home</li> 
                  <li>About</li>  
                  <li>Contact</li>  
                  <li>cart</li>     
                </ul>
            </div>
        </div>
    );
}

const AppLayout = () => {
    return (
        <Header/>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<AppLayout/>);
