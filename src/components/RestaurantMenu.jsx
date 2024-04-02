import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import RestaurantDish from "./RestaurantDish";

const ReastaurantMenu = () => {

  const [restdata, setRestdata] = useState(null);
  const {id} = useParams();

  useEffect(()=>{
    loadData ();
  }, []);

  const loadData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0499711&lng=80.2121306&restaurantId="+id+"&catalog_qa=undefined&isMenuUx4=true&query=Biryani&submitAction=ENTER");

    const json = await data.json();
    setRestdata(json.data)
   } 

   if(restdata === null) return <ShimmerUI/>;

  const {text} = restdata?.cards[0]?.card?.card;
  const {itemCards} = restdata?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card;

   console.log(itemCards)

    return (
        <>
          <h1>{text}</h1>
            {itemCards.map((res) =>
               <RestaurantDish resVal={res}/>
             )}
        </>
    );
}

export default ReastaurantMenu;