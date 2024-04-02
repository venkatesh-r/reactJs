import {IMAGE_URL} from '../utils/constants';

const Cardcontainer = (props) => {
    
    const {resValue} = props;
   
    const {cloudinaryImageId, name, costForTwo, avgRating, deliveryTime, areaName, cuisines} = resValue?.card?.card.info;
       
       return(
           <div className="card-wrapper">
            <img alt="restaurant-logo" src={ IMAGE_URL + cloudinaryImageId}/>
            <h4>{name}</h4>
            <span>Price: {costForTwo}</span>
            <span>Rating - {avgRating} | {deliveryTime} mins</span>
            <div>
               <span>{cuisines.join(", ")}</span><br></br>
               <span>{areaName}</span>
            </div>
           </div>
       );
   }

export default Cardcontainer;