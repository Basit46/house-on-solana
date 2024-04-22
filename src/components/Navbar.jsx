import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaHome, FaTimes } from "react-icons/fa";
import { useWallet } from "@solana/wallet-adapter-react";
import { useGlobalContext } from "../context/globalContext";
require("@solana/wallet-adapter-react-ui/styles.css");

const Navbar = () => {
  const { publicKey } = useWallet();
  const { isMenuOpen, setIsMenuOpen } = useGlobalContext();

  return (
    <nav className="h-[12vh] px-[20px] md:px-[80px] border-b-[2.5px] border-b-slate-400 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-[5px] text-[1.5rem]">
        <FaHome className="text-[2rem] sm:text-[1.5rem] text-[tomato]" />
        <p className="hidden sm:block font-Sec font-bold">HouseOnSol</p>
      </Link>

      <div className="menu flex items-center gap-[20px]">
        <NavLink className="hidden sm:block" to="/">
          Home
        </NavLink>
        <NavLink className="hidden sm:block" to="/properties">
          Properties
        </NavLink>
      </div>

      <div className="flex gap-[5px] items-center">
        {publicKey && (
          <NavLink
            className="hidden sm:flex h-[50px] items-center border-black border-[2px] rounded-[8px] px-[10px] font-semibold"
            to="/profile"
          >
            Profile
          </NavLink>
        )}
        <WalletMultiButton className="border border-[#2c2d30]" />
        <button className="block sm:hidden">
          {isMenuOpen ? (
            <FaTimes
              onClick={() => setIsMenuOpen(false)}
              className="text-[1.4rem] cursor-pointer text-[red]"
            />
          ) : (
            <FaBars
              onClick={() => setIsMenuOpen(true)}
              className="text-[1.4rem] cursor-pointer"
            />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
