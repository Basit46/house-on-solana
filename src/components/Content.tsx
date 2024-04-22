import { FC } from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Properties from "../pages/Properties";
import Footer from "../sections/Footer";
import PropertyDetail from "../pages/PropertyDetail";
import ScrollToTop from "./ScrollToTop";
import Profile from "../pages/Profile";
import Loader from "./Loader";

const Content: FC = () => {
  return (
    <div className="font-Pry">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:id" element={<PropertyDetail />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <ScrollToTop />
      <Loader />

      <Footer />
    </div>
  );
};

export default Content;
