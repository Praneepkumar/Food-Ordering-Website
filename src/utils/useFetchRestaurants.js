import { FETCH_URL } from "./constants";
import { useState, useEffect } from "react";
import useFetchLatLng from "./useFetchLatLng";
const useFetchRestaurants = () => {
  const [reslist, setResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [lat, lng] = await useFetchLatLng();
      const response = await fetch(FETCH_URL(lat, lng));
      const jsonData = await response.json();
      if (!jsonData) throw new Error("Couldn't fetch the details");
      setResList(
        jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      );
    } catch (e) {
      console.error(e);
    }
  };
  return reslist;
};

export default useFetchRestaurants;
