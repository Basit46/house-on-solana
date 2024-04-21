import About from "../sections/About";
import Featured from "../sections/Featured";
import Hero from "../sections/Hero";
import Team from "../sections/Team";

const Home = () => {
  return (
    <div className="pt-[40px]">
      <Hero />
      <Featured />
      <About />
      <Team />
    </div>
  );
};

export default Home;
