import basit from "../assets/basit.jpg";
import mujeeb from "../assets/mujeeb.jpg";

const Team = () => {
  return (
    <div className="relative z-[3] mt-[100px] px-[80px]">
      <h1 className="text-[2.5rem] font-Sec font-bold">Meet our Team</h1>

      <div className="mt-[30px] flex justify-between">
        <div className="w-[46%]">
          <div className="w-full h-[400px]">
            <img
              className="h-full w-full object-cover"
              src={basit}
              alt="creator"
            />
          </div>
          <h1 className="text-[2rem] font-Sec font-medium">Basit</h1>
          <p className="text-[1.2rem]">Creator / Dev</p>
        </div>
        <div className="w-[46%]">
          <div className="w-full h-[400px]">
            <img
              className="h-full w-full object-cover"
              src={mujeeb}
              alt="agent"
            />
          </div>
          <h1 className="text-[2rem] font-Sec font-medium">Mujeeb</h1>
          <p className="text-[1.2rem]">Agent</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
