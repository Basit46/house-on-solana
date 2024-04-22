import Property from "../components/Property";
import { properties } from "../constant/propertiesList";

const Properties = () => {
  return (
    <div className="px-[20px] md:px-[80px] pt-[40px]">
      <h1 className="font-Sec text-[2rem] font-bold leading-[1.2]">
        Explore All Properties
      </h1>

      <div className="mt-[30px] flex flex-wrap gap-[40px] justify-between">
        {properties.map((property, i) => (
          <Property key={i} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Properties;
