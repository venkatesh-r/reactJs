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
        "avgRating": 4.4
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
        "avgRating": 4.4
    }
]

const Body = () => {
    return (
        <div>
           <div className="search-container">Search</div>
           <div className="card-container">
               {resData.map((val)=> {
                  return <Cardcontainer resValue={val} key={val.id}/>
               })}
           </div>
        </div>
    );
}

export default Body;