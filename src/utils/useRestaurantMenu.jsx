import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
   const [menudata, setMenudata] = useState(null);

   useEffect(()=> {
      loadData();
   }, []);

   const loadData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0499711&lng=80.2121306&restaurantId="+resId+"&catalog_qa=undefined&isMenuUx4=true&query=Biryani&submitAction=ENTER");
    const json = await data.json();
    setMenudata(json.data);
   } 
   return menudata;
}

export default useRestaurantMenu;