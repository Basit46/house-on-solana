import { Link } from "react-router-dom";
import Property from "../components/Property";
import { properties } from "../constant/propertiesList";

const Featured = () => {
  return (
    <div className="mt-[100px] px-[20px] md:px-[80px]">
      <div className="flex flex-col sm:flex-row gap-[10px] sm:gap-0 sm:justify-between sm:items-center">
        <h1 className="font-Sec font-bold text-[2rem] md:text-[3rem] leading-[1.1]">
          Explore our <br /> Premium Properties
        </h1>
        <Link
          to="/properties"
          className="w-fit bg-black text-white text-[1rem] md:text-[1.4rem] px-[10px] sm:px-[30px] py-[4px] sm:py-[10px]"
        >
          Explore All Properties
        </Link>
      </div>

      <div className="w-full mt-[50px] flex flex-wrap justify-between gap-[50px]">
        {properties
          .filter((_: any, i: number) => i < 2)
          .map((property: any, i: number) => (
            <Property key={i} property={property} />
          ))}
      </div>
    </div>
  );
};

export default Featured;
