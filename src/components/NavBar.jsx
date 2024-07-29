import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const NavBar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex justify-between w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={14} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              className="px-5 text-colors-gray text-sm cursor-pointer hover:text-white transition-all"
              key={nav}
            >
              {nav}
            </div>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <div>
            <img width={18} height={18} src={searchImg} alt="search icon" />
          </div>
          <div>
            <img width={18} height={18} src={bagImg} alt="bag" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
