import { useEffect, useState } from "react";
import Cardcontainer from "./Cardcontainer";
import ShimmerUI from "./ShimmerUI";
/* import restData from "../utils/mockdata"; */
import { Link } from "react-router-dom";

const Body = () => {

const [userRestaurant, setuserRestaurant] = useState([]);
const [filteredRestaurant, setfilteredRestaurant] = useState([]);
const [searchValue, setsearchValue] = useState([]);

useEffect(()=> {
   loadData();
}, []);

const loadData = async () => {
   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0499711&lng=80.2121306&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");

   const json = await data.json();
   setuserRestaurant(json.data.cards.slice(3));
   setfilteredRestaurant(json.data.cards.slice(3));
};

    return( userRestaurant.length === 0 ? (
      <ShimmerUI/>) : (
        <div>
         <div className="search-wrapper">
            <div className="search-contaciner">
               <input 
               type="text" 
               value={searchValue}
               onChange={(e)=>{setsearchValue(e.target.value)}}
               />
               <button onClick={()=>{
                  const filteredCard = userRestaurant.filter((res) => 
                  res.card.card.info.name.toLowerCase().includes(searchValue.toLowerCase())
              );
              setfilteredRestaurant(filteredCard);
                   
               }}>Search</button>
            </div>
            <div className="filter-container">
               <button onClick={() => 
                  {
                     const filterRestaurant = userRestaurant.filter((fil) => fil.card.card.info.avgRating > 4)
                     
                     setuserRestaurant(filterRestaurant);
                  }
                  
               }>Filter Reastaurant</button>
            </div>
         </div>
           <div className="card-container">
               {filteredRestaurant.map((val)=> {
                  return <Link
                        key={val.id}
                        to={"/restaurantmenu/"+val.card.card.info.id}>
                      <Cardcontainer resValue={val} key={val.id}/>
                  </Link>
               })}
           </div>
        </div>
    )
    )
}

export default Body;