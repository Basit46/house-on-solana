import { Link } from "react-router-dom";
import img1 from "../assets/heroImg1.svg";
import img2 from "../assets/heroImg2.webp";

const Hero = () => {
  return (
    <div>
      <div className="px-[20px] md:px-[80px]">
        <h1 className="text-center font-Sec tracking-wide font-extrabold text-[3rem] md:text-[4rem] leading-[1.2] md:leading-[1.1]">
          Property Investing made simple and small as you can afford on{" "}
          <span className="text-[#9945FF]">SOL</span>
        </h1>
        <p className="mt-[30px] mb-[20px] sm:text-[1.3rem] text-center leading-[1.2]">
          Start buying shares of properties the safe and secure way with solana
        </p>
        <Link
          to="/properties"
          className="mx-auto w-fit block bg-[tomato] px-[40px] font-medium py-[10px] text-[1.1rem] border-b border-black"
        >
          VIEW PROPERTIES
        </Link>
      </div>

      <div className="relative mt-[50px]">
        <img src={img1} alt="house" />
        <img className="absolute bottom-[0]" src={img2} alt="house" />
      </div>
    </div>
  );
};

export default Hero;
