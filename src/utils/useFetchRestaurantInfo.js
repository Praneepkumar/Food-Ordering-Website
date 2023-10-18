import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
import useFetchLatLng from "./useFetchLatLng";
const useFetchRestaurantInfo = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const [lat, lng] = await useFetchLatLng();
    const response = await fetch(MENU_API(lat, lng) + resId);
    const jsonData = await response.json();
    setResInfo(jsonData.data);
  };
  return resInfo;
};
export default useFetchRestaurantInfo;
