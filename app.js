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

const Body = () => {
    return (
        <div>
           <div className="search-container">Search</div>
           <div className="card-container">
               <Cardcontainer/>
               <Cardcontainer/>
           </div>
        </div>
    );
}

const Cardcontainer = () => {
    return(
        <div className="card-wrapper">
         <img alt="restaurant-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/83650e6ca1465c58063a70ad22be4f28"/>
         <h4>Ambur Star Biriyani</h4>
         <span>Rating - 4.3 | 30 mins</span>
         <div>
            <span>Biriyani, South Indian</span>
            <span>T.nagar</span>
         </div>
        </div>
    );
}

const AppLayout = () => {
    return (
        <>
         <Header/>
         <Body/>
        </>
        
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<AppLayout/>);
