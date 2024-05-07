import { DISH_IMG } from "../utils/constants.js";

const ItemList = ({ list }) => {
  console.log(list);
  return (
    <div>
      {list.map((items) => (
        <div
          key={items?.card?.info?.id}
          className="my-2 py-3 border-b border-gray-300 flex justify-between"
        >
          <div>
            <h3 className=" font-semibold">{items.card.info.name}</h3>
            <p className="py-1">Price: {items?.card.info.price / 100}</p>
            {items?.card?.info?.ratings?.aggregatedRating?.rating && (
              <p>
                {items?.card?.info?.ratings?.aggregatedRating?.rating} (
                {items?.card.info.ratings.aggregatedRating.ratingCountV2})
              </p>
            )}
            <p className="pt-4">{items?.card.info.description}</p>
          </div>
          <div>
            {items?.card?.info.imageId && (
              <img
                className="w-32 object-cover rounded-md"
                src={DISH_IMG + items?.card?.info.imageId}
              />
            )}
            <button
              className=" px-5 py-3 border-slate-200
             bg-white shadow-md text-[#1BA672] 
            rounded-md ml-5"
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
