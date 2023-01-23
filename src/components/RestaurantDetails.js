import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_LINK } from "../config";
import Shimmer from "./Shimmer";

const RestaurantDetails = () => {
  const { uniqueid } = useParams();

  const [restaurantdetail, setRestaurantDetail] = useState(null);
  useEffect(() => {
    getrestaurant();
  }, []);
  async function getrestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1651678&lng=72.84010099999999&restaurantId=" +
        uniqueid +
        "&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurantDetail(json);
  }
  return !restaurantdetail ? (
    <Shimmer />
  ) : (
    <>
      <div className="Restaurant-Details">
        <div className="Resuarant-Search">
          <h1>{restaurantdetail.data.cards[0].card.card.info.name}</h1>
          <img
            src={
              IMG_CDN_LINK +
              restaurantdetail.data.cards[0].card.card.info.cloudinaryImageId
            }
          />
          <h3>City:{restaurantdetail.data.cards[0].card.card.info.city}</h3>
          <h3>Area:{restaurantdetail.data.cards[0].card.card.info.areaName}</h3>
          <h3>
            {restaurantdetail.data.cards[0].card.card.info.avgRating} Rating
          </h3>
        </div>
        <div className="Menu-Bar">
          <ul>
            {restaurantdetail.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.map(
              (items) => {
                return <li key={items.id}>{items.card.info.name}</li>;
              }
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
export default RestaurantDetails;
