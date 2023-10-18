import { Link } from "react-router-dom";
const Search = ({
  searchInput,
  setSearchInput,
  onSearchBtn,
  onSearchEnterKey,
}) => {
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <>
      <div className='flex my-12'>
        <div className='relative w-5/6'>
          <input
            type='text'
            placeholder='Type menu, restuarants, etc'
            className='w-full px-6 py-4 border-2 border-gray-300 border-radius'
            value={searchInput}
            onChange={handleSearchInput}
            onKeyDown={onSearchEnterKey}
          />
          {(searchInput && (
            <Link
              to=''
              type='button'
              className='absolute right-3 top-4'
              onClick={() => setSearchInput("")}>
              <i className='ph ph-x-circle text-2xl text-gray-500'></i>
            </Link>
          )) || (
            <div className='absolute right-3 top-4'>
              <i className='ph ph-magnifying-glass text-2xl text-gray-500'></i>
            </div>
          )}
        </div>
        <button
          type='button'
          className='w-1/6 bg-slate-900 text-white text-lg'
          onClick={onSearchBtn}>
          Search
        </button>
      </div>
    </>
  );
};
export default Search;
