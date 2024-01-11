import { useState } from "react";
import Cardcontainer from "./Cardcontainer";
import restData from "../utils/mockdata";

const Body = () => {

const [userRestaurant, setuserRestaurant] = useState(restData);

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