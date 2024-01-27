import React from "react";
import Navbar from "../navbar/Navbar";
import Slider from "../Slider/Slider";
import NavigateButtons from "../NavigateButtons/NavigateButtons";
import ProductSection from "../../components/ProductSection/ProductSection";
import Footer from "../../components/Footer/Footer";
const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      <NavigateButtons></NavigateButtons>
      <ProductSection></ProductSection>
      <Footer></Footer>
    </div>
  );
};

export default Main;
