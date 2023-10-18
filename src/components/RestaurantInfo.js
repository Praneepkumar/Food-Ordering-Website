import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchRestaurantInfo from "../utils/useFetchRestaurantInfo";
import ShimmerInner from "./ShimmerInner";
import RestaurantInfoHeader from "./RestaurantInfoHeader";
import MenuCatagories from "./MenuCatagories";
const RestaurantInfo = () => {
  const { resID } = useParams();
  const resList = useFetchRestaurantInfo(resID);
  const [menuIndex, setMenuIndex] = useState(0);

  if (resList === null || resList === undefined) return <ShimmerInner />;

  return (
    <main className='py-7'>
      <div id='resInfo-container' className='container w-8/12 mx-auto'>
        <RestaurantInfoHeader
          resHeader={resList?.cards?.[0]?.card?.card?.info}
        />

        {resList?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
          .filter(
            (data) =>
              data?.card?.card?.["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
          )
          .map((menu, i) => (
            <MenuCatagories
              menuData={menu}
              key={menu?.card?.card?.title}
              showSubMenu={i === menuIndex ? true : false}
              setMenuIndex={() =>
                setMenuIndex(() => {
                  return i === menuIndex ? -1 : i;
                })
              }
            />
          ))}
      </div>
    </main>
  );
};
export default RestaurantInfo;
