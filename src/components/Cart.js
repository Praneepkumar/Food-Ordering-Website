import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/redux/cartSlice";
import SubMenu from "./SubMenu";
import { Link } from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      {cartItems.length === 0 && (
        <div className='w-8/12 mx-auto mt-16 mb-10 flex flex-col gap-10 items-center'>
          <div className='max-w-[50%] mx-auto flex justify-center'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF0VIN1JC4jntvJ6RGO_t9hE0V7QcvJ9Mk99TpQn9BfO0r2a51dQJrAHGF4gGFcjrp39Q&usqp=CAU'
              className='w-[70%] filter opacity-50'
            />
          </div>
          <h2 className='text-center text-2xl'>
            The cart is empty. Add items to the cart
          </h2>
          <Link to={"/"}>
            <button className='px-6 py-2 bg-zinc-800 text-white hover:bg-zinc-950 rounded-md'>
              View Restaurants
            </button>
          </Link>
        </div>
      )}
      <div id='menu-content' className='w-6/12 mx-auto '>
        <div className='[&>*:not(:last-child)]:border-b-[1px] list-none'>
          {cartItems?.map((menu) => (
            <SubMenu menu={menu} key={menu?.id} />
          ))}
        </div>
        {cartItems.length !== 0 && (
          <div className='mt-6 mb-14 flex justify-end'>
            <div className='flex gap-5'>
              <button
                onClick={handleClearCart}
                className='px-6 py-2 bg-gray-50 border-[1px] border-stone-200 hover:bg-gray-100 rounded-md hover:border-stone-300'>
                Clear Cart
              </button>
              <button className='px-6 py-2 bg-zinc-800 text-white hover:bg-zinc-950 rounded-md'>
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Cart;
