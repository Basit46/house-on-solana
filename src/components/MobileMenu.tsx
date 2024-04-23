import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/globalContext";

const MobileMenu = () => {
  const { isMenuOpen, setIsMenuOpen } = useGlobalContext();

  return (
    <div
      className={`${
        isMenuOpen ? "sm:hidden" : "hidden"
      } fixed z-[10] top-[11vh] left-0 w-full h-[200px] bg-black text-white flex flex-col items-center gap-[20px] justify-center`}
    >
      <NavLink
        onClick={() => setIsMenuOpen(false)}
        className="text-[1.2rem] font-semibold"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        onClick={() => setIsMenuOpen(false)}
        className="text-[1.2rem] font-semibold"
        to="/properties"
      >
        Properties
      </NavLink>
      <NavLink
        onClick={() => setIsMenuOpen(false)}
        className="text-[1.2rem] font-semibold"
        to="/profile"
      >
        Profile
      </NavLink>
    </div>
  );
};

export default MobileMenu;
