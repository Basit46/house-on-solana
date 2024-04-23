import { BsArrowUpRight } from "react-icons/bs";
import outline from "../assets/premiumBtn.svg";
import { Link } from "react-router-dom";
import { propertyType } from "../constant/propertiesList";

const Property = ({ property }: { property: propertyType }) => {
  return (
    <Link to={`/properties/${property.id}`} className="w-full lg:w-[46%]">
      <div className="relative w-full hfit lg:h-[462px]">
        <img
          className="h-full w-full object-cover"
          src={property.img}
          alt="House"
        />
        <div className="absolute top-[10px] lg:top-[20px] left-[10px] lg:left-[40px] bg-white px-[20px] py-[3px] text-[1.5rem] font-bold">
          {property.price} sol
        </div>
      </div>
      <div className="mt-[20px] pr-[20px] flex justify-between items-center">
        <div>
          <h1 className="font-Sec font-bold text-[2rem]">{property.name}</h1>
          <p className="text-[1.1rem]">{property.address}</p>

          <div className="mt-[50px] flex justify-between border-y border-[#95d5ed] py-[10px]">
            <p className="text-[1.3rem]">{property.bedrooms} bd</p>
            <div className="h-[40px] w-0 border-l-[0.1px] border-black" />
            <p className="text-[1.3rem]">{property.bathrooms} bps</p>
            <div className="h-[40px] w-0 border-l-[0.1px] border-black" />
            <p className="text-[1.3rem]">
              {property.area} m<sup>2</sup>
            </p>
          </div>
        </div>

        <div className="relative ">
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[70px] w-[70px] bg-gray-200 rounded-full grid place-items-center">
            <BsArrowUpRight className="font-bold text-[30px]" />
          </div>
          <img
            className="animate-spin-s cursor-pointer"
            src={outline}
            alt="arrow outline"
          />
        </div>
      </div>
    </Link>
  );
};

export default Property;
