import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import RestaurantDish from "./RestaurantDish";
import ReastaurantCategory from "./ReastaurantCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const ReastaurantMenu = () => {
  const { id } = useParams();
  const restdata = useRestaurantMenu(id);

  if (restdata === null) return <ShimmerUI />;

  const { text } = restdata?.cards[0]?.card?.card;
  const { itemCards } =
    restdata?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  //console.log(restdata?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const itemCategory =
    restdata?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (val) => {
        return (
          val?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  return (
    <>
      <h1 className="font-bold text-3xl m-4">{text}</h1>

      {itemCategory.map((val) => (
        <ReastaurantCategory datalist={val?.card?.card} />
      ))}
    </>
  );
};

export default ReastaurantMenu;
