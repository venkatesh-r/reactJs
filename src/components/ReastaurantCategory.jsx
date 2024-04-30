import { useState } from "react";
import ItemList from "./ItemList";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ReastaurantCategory = ({ datalist }) => {
  const [showlist, setshowlist] = useState(false);
  const dishAccordion = () => {
    setshowlist(!showlist);
  };

  return (
    <>
      <div className="w-6/12 mx-auto p-2 my-4 shadow-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={dishAccordion}
        >
          <span className="font-bold text-lg">
            {datalist.title} ({datalist.itemCards.length})
          </span>
          <span>
            <ExpandMoreIcon />
          </span>
        </div>
        {showlist && <ItemList list={datalist.itemCards} />}
      </div>
    </>
  );
};

export default ReastaurantCategory;
