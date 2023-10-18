import { useContext, useState } from "react";
import DisplayUserContext from "../utils/DisplayUserContext";
import { Link } from "react-router-dom";
const UserLogin = () => {
  const [loginInput, setLoginInput] = useState("");
  const { setUserName } = useContext(DisplayUserContext);
  const handleFormSubmit = () => {
    if (!loginInput) return;
    setUserName(loginInput);
  };
  return (
    <main className='main'>
      <div className='container mx-auto '>
        <form className='w-6/12 mx-auto my-16 px-3 py-7 '>
          <label htmlFor='login' className='text-2xl font-semibold mb-8 block'>
            Login to Your Account
          </label>
          <div className='flex items-center'>
            <div className='relative w-8/12 '>
              <input
                value={loginInput}
                onChange={(e) => setLoginInput(e.target.value)}
                id='login'
                type='text'
                placeholder='Enter user name'
                className='w-full block rounded-l-md border-0 p-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-100 md:text-base sm:text-sm sm:leading-6'
              />
              {loginInput && (
                <Link to='' onClick={() => setLoginInput("")}>
                  <i className='ph ph-x-circle text-2xl text-gray-500 absolute right-2 top-4'></i>
                </Link>
              )}
            </div>
            {loginInput ? (
              <Link
                to={"/"}
                onClick={handleFormSubmit}
                type='button'
                className='block w-4/12 bg-slate-900 text-white p-4 rounded-r-md text-center hover:bg-slate-800'>
                Login
              </Link>
            ) : (
              <Link
                to={"#"}
                type='button'
                className='block w-4/12 bg-neutral-400 text-white p-4 rounded-r-md text-center hover:cursor-not-allowed'>
                Login
              </Link>
            )}
          </div>
        </form>
      </div>
    </main>
  );
};
export default UserLogin;
