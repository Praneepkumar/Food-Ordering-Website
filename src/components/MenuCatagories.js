import SubMenu from "./SubMenu";
const MenuCatagories = ({ menuData, showSubMenu, setMenuIndex }) => {
  const handleShowSubMenu = () => {
    setMenuIndex();
  };

  return (
    <div className='px-4 py-5 rounded-md shadow mt-6 mb-2 bg-white transition-all ease-in-out delay-500'>
      <div
        id='menu-header'
        onClick={handleShowSubMenu}
        className='flex justify-between hover:cursor-pointer '>
        <h2 className='text-lg font-bold text-gray-600'>
          {menuData?.card?.card?.title}&nbsp;(
          {menuData?.card?.card?.itemCards?.length})
        </h2>
        {!showSubMenu ? (
          <i className='ph ph-caret-down text-xl'></i>
        ) : (
          <i className='ph ph-caret-up text-xl'></i>
        )}
      </div>

      {showSubMenu && (
        <div id='menu-content'>
          <div className='[&>*:not(:last-child)]:border-b-[1px] list-none'>
            {menuData?.card?.card?.itemCards.map((menu, i) => (
              <SubMenu
                menu={menu?.card?.info}
                key={menu?.card?.info?.id}
                i={i}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuCatagories;
