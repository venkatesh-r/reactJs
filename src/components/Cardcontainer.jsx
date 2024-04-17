import {IMAGE_URL} from '../utils/constants';

const Cardcontainer = (props) => {
    
    const {resValue} = props;
   
    const {cloudinaryImageId, name, costForTwo, avgRating, deliveryTime, areaName, cuisines} = resValue?.card?.card.info;
       
       return(
           <div className="p-3 m-3 w-[270px] bg-gray-200">
            <img className="w-[250] h-[220]" alt="restaurant-logo" src={ IMAGE_URL + cloudinaryImageId}/>
            <h4 className='font-bold pt-2 pb-3'>{name}</h4>
            <p>Price: {costForTwo}</p>
            <p>Rating - {avgRating} | {deliveryTime} mins</p>
            <div>
               <p>{cuisines.join(", ")}</p>
               <p>{areaName}</p>
            </div>
           </div>
       );
};

//high order component

export const RestaurantPromotion = (Cardcontainer) => {
    return (props) => {
        return (
            <>
              <label>Promotion</label>
              <Cardcontainer {...props}/>
            </>
            
        )
    }
}

export default Cardcontainer;