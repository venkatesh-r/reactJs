import { useState } from "react";
import Cardcontainer from "./Cardcontainer";
//import restData from "../utils/mockdata";


let resData = [
    {
        "id": "129725",
        "name": "Hotel Farook",
        "cloudinaryImageId": "zmybiawap42zuqd5wowl",
        "locality": "Purasavakkam",
        "areaName": "Purasaiwakkam",
        "costForTwo": "₹450 for two",
        "cuisines": [
          "South Indian",
          "Arabian",
          "Tandoor",
          "Grill",
          "Seafood"
        ],
        "deliveryTime": 44,
        "avgRating": 3.4
    },
    {
        "id": "129726",
        "name": "Star Biriyani",
        "cloudinaryImageId": "zmybiawap42zuqd5wowl",
        "locality": "Purasavakkam",
        "areaName": "Purasaiwakkam",
        "costForTwo": "₹450 for two",
        "cuisines": [
          "South Indian",
          "Biriyani",
          "Tandoor",
          "Grill",
          "Seafood"
        ],
        "deliveryTime": 44,
        "avgRating": 4.4
    },
    {
        "id": "129727",
        "name": "KFC",
        "cloudinaryImageId": "zmybiawap42zuqd5wowl",
        "locality": "Purasavakkam",
        "areaName": "Purasaiwakkam",
        "costForTwo": "₹450 for two",
        "cuisines": [
          "Fried chicken",
          "Arabian",
          "Tandoor",
          "Grill",
          "Seafood"
        ],
        "deliveryTime": 40,
        "avgRating": 4.2
    }
]

const Body = () => {

const [userRestaurant, setuserRestaurant] = useState(resData);

    return (
        <div>
           <div className="search-container">
             <button onClick={() => 
                {
                   const filterRestaurant = resData.filter((fil) => fil.avgRating > 4 )
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