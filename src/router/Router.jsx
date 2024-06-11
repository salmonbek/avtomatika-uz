import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "./../pages/About";
import Service from "./../pages/Service";
import Contact from "./../pages/Contact";
import Header from "../components/home/header/Header";
import Footer from "../components/footer/Footer";

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Router;
