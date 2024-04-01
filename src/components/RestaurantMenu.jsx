import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";

const ReastaurantMenu = () => {

    const [restdata, setRestdata] = useState(null);

    const {id} = useParams();

    console.log(id);

   useEffect(()=>{
    loadData ();
   }, []);

   const loadData = async () => {
       const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0499711&lng=80.2121306&restaurantId="+id+"&catalog_qa=undefined&isMenuUx4=true&query=Biryani&submitAction=ENTER");

       /* const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0499711&lng=80.2121306&restaurantId="+resId+"&catalog_qa=undefined&isMenuUx4=true&query=Biryani&submitAction=ENTER"); */

       const json = await data.json();
       console.log(json.data);
       setRestdata(json.data)
   } 

   if(restdata === null) return <ShimmerUI/>;

   const {text} = restdata?.cards[0]?.card?.card;
const {itemCards} = restdata?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card;

   console.log(itemCards)

    return (
        <>
          <h1>{text}</h1>
          <ul>
            {itemCards.map((res) =>
              <li>{res.card.info.name}</li>
             )}
          </ul>
        </>
    );
}

export default ReastaurantMenu;