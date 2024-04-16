import { DISH_IMG } from "../utils/constants";

const RestaurantDish = (props) => {
    const{resVal} = props;
    const {name, description, price, imageId} = resVal?.card?.info;
    const {rating} = resVal?.card?.info?.ratings?.aggregatedRating;
    const {vegClassifier} = resVal?.card?.info?.itemAttribute;
    return (
        <>
         <div className="flex p-4 ml-3 my-4 border border-gray-400 w-[80%]">
            <div className="details my-4 w-[60%] ">
                <p className="variety" style={{color: vegClassifier === "NONVEG" ? 'red' : 'green'}}>{vegClassifier}</p>
                <h3>{name}</h3>
                <span>Rating: {rating}</span> |  <span>Price: {price/100}</span>
                <p>{description}</p>
            </div>
            <div className="p-4 my-4">
                <img className="w-[200]" src={DISH_IMG + imageId}></img>
            </div>
         </div>
        </>
    )
}

export default RestaurantDish;