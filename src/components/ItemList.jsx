const ItemList = ({ list }) => {
  console.log(list);
  return (
    <>
      {list.map((items) => (
        <div className="my-2 py-4 border-b border-indigo-500">
          <h3 className=" font-semibold">{items.card.info.name}</h3>
          <p>Price: {items?.card.info.price / 100}</p>
          <p>
            {items?.card.info.ratings.aggregatedRating.rating} (
            {items?.card.info.ratings.aggregatedRating.ratingCountV2})
          </p>
          <p>{items?.card.info.description}</p>
        </div>
      ))}
    </>
  );
};

export default ItemList;
