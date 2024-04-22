import { useEffect } from "react";
import { useGlobalContext } from "../context/globalContext";
import { FaTimes } from "react-icons/fa";

const Toast = () => {
  const { isToastOpen, setIsToastOpen } = useGlobalContext();

  useEffect(() => {
    let timeoutId: any;

    if (isToastOpen) {
      timeoutId = setTimeout(() => {
        setIsToastOpen(false);
      }, 4000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isToastOpen]);

  return (
    <div
      className={`${
        !isToastOpen && "hidden"
      } fixed top-[20px] right-[20px] bg-[#e0f3e0] border-[2px] border-[green] text-[green] rounded-[10px] w-[300px] h-[50px] flex justify-between items-center pl-[10px] pr-[4px] text-[1.2rem]`}
    >
      Succesfully Invested
      <FaTimes
        onClick={() => setIsToastOpen(false)}
        className="text-[20px] text-[red] cursor-pointer"
      />
    </div>
  );
};

export default Toast;
