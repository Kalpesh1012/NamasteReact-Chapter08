import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  const [allrestaurant, setAllRestaurant] = useState([]);
  const [firstname, setfistname] = useState();
  const [searchrestaurant, setSearchRestaurants] = useState([]);

  function filterdata(firstname, searchrestaurant) {
    const filtersdata = searchrestaurant.filter((restau) =>
      restau.data.name.toLowerCase().includes(firstname.toLowerCase())
    );

    return filtersdata;
  }

  useEffect(() => {
    fetching();
  }, []);

  async function fetching() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1651678&lng=72.84010099999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setSearchRestaurants(json?.data?.cards?.[2]?.data?.data?.cards);
    setAllRestaurant(json?.data?.cards?.[2]?.data?.data?.cards);
  }
  if (!allrestaurant) return null;
  return allrestaurant?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-conatiner">
        <input
          className="search-input"
          type="text"
          placeholder="Search....."
          value={firstname}
          onChange={(event) => {
            setfistname(event.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const data = filterdata(firstname, allrestaurant);
            setSearchRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="body">
        {searchrestaurant.length > 0 ? (
          searchrestaurant.map((rest) => {
            //console.log(rest);
            return (
              <Link
                className="Restaurant-Link"
                to={"/restuarant/" + rest.data.id}
              >
                <RestaurantCard {...rest.data} key={rest.data.id} />
              </Link>
            );
          })
        ) : (
          <h1>Not Found</h1>
        )}
      </div>
    </>
  );
};

export default Body;
