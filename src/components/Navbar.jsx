import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
require("@solana/wallet-adapter-react-ui/styles.css");

const Navbar = () => {
  return (
    <nav className="px-[80px] py-[15px] border-b-[2.5px] border-b-slate-400 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-[5px] text-[1.5rem]">
        <FaHome className="text-[tomato]" />
        <p className="font-Sec font-bold">HouseOnSol</p>
      </Link>

      <div className="menu flex items-center gap-[20px]">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/properties">Properties</NavLink>
      </div>

      <div className="flex gap-[5px] items-center">
        <NavLink
          className="h-[50px] flex items-center border-black border-[2px] rounded-[8px] px-[10px] font-semibold"
          to="/profile"
        >
          Profile
        </NavLink>
        <WalletMultiButton className="border border-[#2c2d30]" />
      </div>
    </nav>
  );
};

export default Navbar;
