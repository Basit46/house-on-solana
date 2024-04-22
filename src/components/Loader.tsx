import { useGlobalContext } from "../context/globalContext";

const Loader = () => {
  const { isLoaderOpen } = useGlobalContext();
  return (
    <div
      className={`${
        !isLoaderOpen && "hidden"
      } bg-black/80 fixed top-0 left-0 bottom-0 h-screen w-screen flex flex-col items-center justify-center`}
    >
      <div className="h-[100px] w-[100px] border-t-[3px] border-white rounded-full animate-spin" />
      <h1 className="text-white text-[1.2rem]">Processing... kindly hold</h1>
    </div>
  );
};

export default Loader;
