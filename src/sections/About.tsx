import bg from "../assets/aboutBg.svg";
import img from "../assets/aboutImg.jpg";

const About = () => {
  return (
    <div className="mt-[100px] h-[300vh] relative px-[80px] flex">
      <div className="w-[50%] h-screen sticky top-0 overflow-hidden">
        <img className="h-full w-full object-cover" src={img} alt="Houses" />
      </div>

      <div className="relative w-[50%] h-screen">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h1 className="font-Sec text-[2rem] font-bold text-center">
            Affordable Price
          </h1>
          <p className="w-[70%] text-[1.2rem] text-center mt-[10px]">
            We provide the best for you. The price we offer accordance with the
            quality we provide
          </p>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h1 className="font-Sec text-[2rem] font-bold text-center">
            Clear Legality
          </h1>
          <p className="w-[70%] text-[1.2rem] text-center mt-[10px]">
            We provide the best for you. The price we offer accordance with the
            quality we provide
          </p>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h1 className="font-Sec text-[2rem] font-bold text-center">
            Experienced Agent
          </h1>
          <p className="w-[70%] text-[1.2rem] text-center mt-[10px]">
            We provide the best for you. The price we offer accordance with the
            quality we provide
          </p>
        </div>

        <img className="sticky bottom-0" src={bg} alt="house Illustration" />
      </div>
    </div>
  );
};

export default About;
