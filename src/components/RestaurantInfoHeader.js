const RestaurantInfoHeader = ({ resHeader }) => {
  const {
    name,
    areaName,
    cuisines,
    feeDetails: { message, icon },
    avgRatingString,
    totalRatingsString,
  } = resHeader;
  return (
    <div
      id='res-header'
      className='flex justify-between py-6 border-b-[1px] border-gray-300 border-dashed'>
      <div id='header-left' className='flex flex-col gap-5'>
        <div className='flex flex-col gap-2'>
          <h2 id='heading' className='text-[22px] font-semibold'>
            {name}
          </h2>
          <div className='flex flex-col gap-1'>
            <p className='text-[16px] text-gray-800'>{areaName}</p>
            <p className='text-[14px] text-gray-400'>{cuisines.join(", ")}</p>
          </div>
        </div>
        <div className='flex items-center gap-1'>
          <div className='max-w-full'>
            <img
              className='w-full'
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/${icon}`}
            />
          </div>
          <p className='text-[14px] text-gray-500'>{message}</p>
        </div>
      </div>

      <div id='header-right'>
        <div className='flex flex-col border-[1px] border-gray-200 rounded-md px-2 py-2 justify-center gap-3 '>
          <div className='flex gap-2 items-center justify-center pb-3 border-b-[1px]'>
            <i
              className={
                +avgRatingString < 4
                  ? "ph-fill ph-star text-orange-600"
                  : "ph-fill ph-star text-[#188c3e]"
              }></i>
            <p className='text-[15px] text-gray-600 font-medium'>
              {avgRatingString}
            </p>
          </div>
          <p className='text-sm text-gray-400 font-medium'>
            {totalRatingsString}
          </p>
        </div>
      </div>
    </div>
  );
};
export default RestaurantInfoHeader;
