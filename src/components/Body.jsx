import { useEffect, useState } from "react";
import Cardcontainer from "./Cardcontainer";
import ShimmerUI from "./ShimmerUI";
/* import restData from "../utils/mockdata"; */

const Body = () => {

const [userRestaurant, setuserRestaurant] = useState([]);

//console.log(userRestaurant)

useEffect(()=> {
   loadData();
}, []);

const loadData = async () => {
   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0499711&lng=80.2121306&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");

   const json = await data.json();
   
   setuserRestaurant(json.data.cards.slice(3));
};

if(userRestaurant.length === 0) {
   return <ShimmerUI/>
}



    return (
        <div>
           <div className="search-container">
             <button onClick={() => 
                {
                   const filterRestaurant = restData.filter((fil) => fil.card.info.avgRating > 4)
                   setuserRestaurant(filterRestaurant);
                }
                
             }>Filter Reastaurant</button>
             
           </div>
           
           <div className="card-container">
               {userRestaurant.map((val)=> {
                  return <Cardcontainer resValue={val} key={val.id}/>
               })}
           </div>
        </div>
    );
}

export default Body;