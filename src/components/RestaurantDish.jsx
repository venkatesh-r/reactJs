import { DISH_IMG } from "../utils/constants";

const RestaurantDish = (props) => {
    const{resVal} = props;
    const {name, description, price, imageId} = resVal?.card?.info;
    const {rating} = resVal?.card?.info?.ratings?.aggregatedRating;
    const {vegClassifier} = resVal?.card?.info?.itemAttribute;
    return (
        <>
         <div className="dish-wrapper">
            <div className="details">
                <p className="variety">{vegClassifier}</p>
                <h3>{name}</h3>
                <span>Rating: {rating}</span> |  <span>Price: {price/100}</span>
                <p>{description}</p>
            </div>
            <div className="image">
                <img src={DISH_IMG + imageId}></img>
            </div>
         </div>
        </>
    )
}

export default RestaurantDish;