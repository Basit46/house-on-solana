import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useGlobalContext } from "../context/globalContext";
require("@solana/wallet-adapter-react-ui/styles.css");

const Navbar = () => {
  const { val } = useGlobalContext();
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
        <WalletMultiButton className="border border-[#2c2d30]" />
        <NavLink to="/profile">Profile</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
