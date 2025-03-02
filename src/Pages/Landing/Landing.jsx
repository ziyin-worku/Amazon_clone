import React from "react";
import LayOut from "../../Component/LayOut/LayOut";
import Carousel from "../../Component/Carousel/Carousel";
import Category from "../../Component/Category/Category";
import Product from "../../Component/Product/Product";

function Landing() {
  return (
    <LayOut>
      <Carousel />
      <Category />
      <Product />
    </LayOut>
  );
}

export default Landing;
