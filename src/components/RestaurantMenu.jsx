import { useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import ReastaurantCategory from "./ReastaurantCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const ReastaurantMenu = () => {
  const { id } = useParams();
  const restdata = useRestaurantMenu(id);

  const [showIndex, setShowIndex] = useState(1);

  if (restdata === null) return <ShimmerUI />;

  const { text } = restdata?.cards[0]?.card?.card;
  const { itemCards } =
    restdata?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

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
      <h1 className="w-6/12 mx-auto font-bold text-3xl m-4">{text}</h1>

      {itemCategory.map((val, index) => (
        <ReastaurantCategory
          key={val?.card?.card?.title}
          datalist={val?.card?.card}
          showlist={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </>
  );
};

export default ReastaurantMenu;
