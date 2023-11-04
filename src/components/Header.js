import { Link } from "react-router-dom";
import { useContext } from "react";
import DisplayUserContext from "../utils/DisplayUserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const { user, setUserName } = useContext(DisplayUserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <header id='header' className='shadow-md bg-white'>
      <div className='container mx-auto px-1'>
        <nav className='flex flex-wrap justify-between items-center px-3 py-4'>
          <div className='nav-brand w-20'>
            <Link to='/'>
              <img
                src='https://png.pngtree.com/png-clipart/20220903/ourmid/pngtree-chef-restaurant-logo-png-image_6136204.png'
                alt='img-logo'
                className='w-100'
              />
            </Link>
          </div>
          <ul className='flex flex-wrap gap-14 text-lg font-semibold from-neutral-800 '>
            <li className='hover:text-red-500'>
              <Link to='/'>Home</Link>
            </li>
            <li className='hover:text-red-500'>
              <Link to='/grocery'>Grocery</Link>
            </li>
            <li className='hover:text-red-500 relative'>
              <Link to='/cart'>Cart </Link>
              {cartItems.length !== 0 && (
                <p className='absolute bg-[#f04141] text-white w-[17px] h-[17px] text-[13px] rounded-[50%] top-[-2px] left-[36px] flex items-center self-center justify-center'>
                  {cartItems.length}
                </p>
              )}
            </li>

            <li className='hover:text-red-500'>
              <Link to='/contact'>Contact</Link>
            </li>

            <li className='hover:text-red-500'>
              {user !== "" ? (
                <Link to='/' onClick={() => setUserName("")}>
                  Logout
                </Link>
              ) : (
                <Link to='/login' type='button'>
                  <button> Login</button>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
