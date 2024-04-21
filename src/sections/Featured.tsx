import { Link } from "react-router-dom";
import Property from "../components/Property";
import { properties } from "../constant/propertiesList";

const Featured = () => {
  return (
    <div className="mt-[100px] px-[80px]">
      <div className="flex justify-between items-center">
        <h1 className="font-Sec font-bold text-[3rem] leading-[1.1]">
          Explore our <br /> Premium Properties
        </h1>
        <Link
          to="/properties"
          className="bg-black text-white text-[1.4rem] px-[30px] py-[10px]"
        >
          Explore All Properties
        </Link>
      </div>

      <div className="w-full mt-[50px] flex flex-wrap justify-between gap-[50px]">
        {properties.map((property, i) => (
          <Property key={i} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
