import React from "react";
import Header from "./Component/Header/Header";

import CarouselEffect from "./Component/Carousel/Carousel";
import Category from "./Component/Category/Category";
import Product from "./Component/Product/Product";

function App() {
  return (
    <>
      <Header />
      <CarouselEffect/>
      <Category/>
      <Product/>
    </>
  );
}

export default App;
