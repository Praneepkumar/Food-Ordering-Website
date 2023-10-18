import { IMG_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const DisplayRestaurants = ({ restaurantInfo }) => {
  const { name, cloudinaryImageId, areaName, cuisines, avgRating, id } =
    restaurantInfo;
  return (
    <div className='flex flex-col gap-5 rounded-lg overflow-hidden border shadow-sm w-[300px]'>
      <div className='h-52'>
        <img
          src={IMG_URL + cloudinaryImageId}
          alt={name}
          className='w-full h-full object-cover bg-stone-400'
        />
      </div>
      <div className='flex flex-col gap-4 px-3 pb-3'>
        <div className='flex flex-col gap-1'>
          <h3 className='text-2xl'>
            {name.length >= 20 ? name.substring(0, 20) + "..." : name}
          </h3>
          <div className='text-slate-600 flex justify-between'>
            <p>{areaName}</p>
            <span className='ratings'>
              <i
                className={
                  avgRating < 4
                    ? "ph-fill ph-star text-orange-600"
                    : "ph-fill ph-star text-[#188c3e]"
                }></i>
              &nbsp;{avgRating}
            </span>
          </div>

          <div className='text-stone-400'>
            <span>
              {cuisines.join(", ").length > 20
                ? cuisines.join(", ").substring(0, 30) + "..."
                : cuisines.join(", ")}
            </span>
          </div>
        </div>
        <div className='card-cta'>
          <Link
            to={`/restaurants/${id}`}
            className='hover:underline hover:text-red-500'>
            View Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

//Higher order component
export const DiscountInfoRestaurant = (DisplayRestaurants) => {
  return (props) => {
    const { aggregatedDiscountInfoV3 } = props.restaurantInfo;
    return (
      <>
        <div className='relative '>
          <div className='transparent-gradient text-white absolute block w-full top-[40%] text-center pt-5 pb-3 '>
            <p className='text-xl font-extrabold drop-shadow-md'>
              {aggregatedDiscountInfoV3.header +
                " " +
                aggregatedDiscountInfoV3.subHeader}
            </p>
          </div>
          <DisplayRestaurants {...props} />
        </div>
      </>
    );
  };
};
export default DisplayRestaurants;
