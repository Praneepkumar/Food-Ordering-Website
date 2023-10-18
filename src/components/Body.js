import { useContext, useEffect, useState } from "react";
import Search from "./Search";
import useFetchRestaurants from "../utils/useFetchRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";
import DisplayUserContext from "../utils/DisplayUserContext";
import DisplayRestaurants, {
  DiscountInfoRestaurant,
} from "./DisplayRestaurants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredReslist, setFilteredResList] = useState([]);

  const resList = useFetchRestaurants();
  const onlineStatus = useOnlineStatus();
  const RestaurantsWithDiscounts = DiscountInfoRestaurant(DisplayRestaurants);
  const { user } = useContext(DisplayUserContext);

  useEffect(() => {
    if (filteredReslist.length === 0 && resList.length > 0)
      setFilteredResList(resList);
  }, [filteredReslist.length, resList.length]);

  const handleFilter = () => {
    setFilteredResList(
      filteredReslist.filter((res) => res?.info?.avgRating >= 4),
    );
  };
  const handleReset = () => {
    setFilteredResList(resList);
  };

  const handleSearchBtn = () => {
    if (searchInput === "") return;
    const searchData = resList.filter((res) =>
      res?.info?.name
        .toLowerCase()
        .trim()
        .includes(searchInput.toLowerCase().trim()),
    );
    setFilteredResList(searchData);
    setSearchInput("");
  };
  const handlekeyEvent = (e) => {
    if (e.key === "Enter") handleSearchBtn();
  };

  if (!onlineStatus)
    return (
      <main className='main'>
        <div className='container mx-auto px-1'>
          <h3 className='text-center text-xl mt-10'>
            Your are Offline. please check your internet connection and try
            again
          </h3>
        </div>
      </main>
    );
  return filteredReslist.length === 0 ? (
    <main className='main mb-16 py-7'>
      <Shimmer />
    </main>
  ) : (
    <main className='main mb-16 py-7'>
      <div className='container mx-auto px-1'>
        <h2 className='my-4 text-3xl font-semibold'>
          {user !== "" ? `Welcome back ${user}!` : "Login to explore more"}
        </h2>
        <Search
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          onSearchBtn={handleSearchBtn}
          onSearchEnterKey={handlekeyEvent}
        />
        <div className='flex justify-between items-center my-10'>
          <h2 className='text-3xl font-semibold'>Explore Restaurants</h2>
          <div className='flex gap-8 text-lg'>
            <p>
              <span className='font-semibold'>{filteredReslist.length}</span>{" "}
              results
            </p>
            {filteredReslist.length === resList.length ? (
              <Link
                to='/#'
                role='button'
                className='font-semibold hover:text-blue-600'
                onClick={handleFilter}>
                Filter
              </Link>
            ) : (
              <Link
                to='/#'
                role='button'
                className='font-semibold hover:text-blue-600'
                onClick={handleReset}>
                Reset
              </Link>
            )}
          </div>
        </div>

        <div className='flex flex-wrap grow gap-6 w-full mx-auto'>
          {filteredReslist.map((restaurant) =>
            restaurant?.info?.aggregatedDiscountInfoV3 ? (
              <RestaurantsWithDiscounts
                restaurantInfo={restaurant?.info}
                key={restaurant?.info?.id}
              />
            ) : (
              <DisplayRestaurants
                restaurantInfo={restaurant?.info}
                key={restaurant?.info?.id}
              />
            ),
          )}
        </div>
      </div>
    </main>
  );
};

export default Body;
