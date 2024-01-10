import { FETCH_RESTAURANTS } from "./constants";
import { useState, useEffect } from "react";
import useFetchLatLng from "./useFetchLatLng";

const useFetchRestaurants = async () => {
  try {
    const [lat, lng] = await useFetchLatLng();
    const response = await fetch(FETCH_RESTAURANTS(lat, lng));
    const jsonData = await response.json();

    if (!jsonData) {
      throw new Error("Couldn't fetch the details");
    }

    return jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;
  } catch (e) {
    console.error(e);
  }
};

export default useFetchRestaurants;
