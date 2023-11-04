import { useDispatch } from "react-redux";
import { addItems } from "../utils/redux/cartSlice";
const SubMenu = ({ menu }) => {
  /*Variables*/
  const { name, description, imageId, price, ribbon, defaultPrice } = menu;
  const showRibbon = Object.keys(ribbon).length === 0 ? false : true;
  const dispatch = useDispatch();

  /*callback functions*/
  const handleAddItems = () => {
    dispatch(addItems(menu));
  };

  return (
    <div className='my-3 py-5 flex justify-between'>
      <div className='w-10/12 flex flex-col gap-3'>
        <div id='item-header' className='flex flex-col  gap-1'>
          {showRibbon && (
            <div className='flex gap-1 items-center'>
              <i className='ph-fill ph-star text-[#ee9c00]'></i>
              <p className='text-[#ee9c00;]'>{ribbon?.text}</p>
            </div>
          )}
          <h2 className='font-medium'>{name}</h2>
          <p className='text-gray-600'>
            &#8377;{price ? price / 100 : defaultPrice / 100}
          </p>
        </div>
        <span className='text-sm text-zinc-500 font-light pr-10'>
          {description}
        </span>
      </div>
      <div className='w-2/12 flex justify-end'>
        <div className='flex flex-col gap-4 '>
          {imageId ? (
            <div className='p-[10px] shadow-md w-[120px] h-[110px] rounded-lg'>
              <img
                className='w-full h-full object-cover rounded-md '
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                  imageId
                }
                alt={name}
              />
            </div>
          ) : (
            ""
          )}
          <button
            onClick={handleAddItems}
            type='button'
            className='px-2 py-1 w-[120px] bg-slate-50 hover:bg-slate-100 rounded-md'>
            &#43; Add Item
          </button>
        </div>
      </div>
    </div>
  );
};
export default SubMenu;
