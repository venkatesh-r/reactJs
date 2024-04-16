import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import RestaurantDish from "./RestaurantDish";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const ReastaurantMenu = () => {
  const {id} = useParams();
  const restdata = useRestaurantMenu(id);

   if(restdata === null) return <ShimmerUI/>;

  const {text} = restdata?.cards[0]?.card?.card;
  const {itemCards} = restdata?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <>
          <h1 className="font-bold text-3xl m-2">{text}</h1>
            {itemCards.map((res) =>
               <RestaurantDish resVal={res}/>
             )} 
        </>
    );
}

export default ReastaurantMenu;