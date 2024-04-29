import ItemList from "./ItemList";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ReastaurantCategory = ({ datalist }) => {
  return (
    <>
      <div className="w-6/12 mx-auto p-2 my-4 shadow-lg">
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {datalist.title} ({datalist.itemCards.length})
          </span>
          <span>
            <ExpandMoreIcon />
          </span>
        </div>
        <ItemList list={datalist.itemCards} />
      </div>
    </>
  );
};

export default ReastaurantCategory;
