import React, { useEffect, useState } from "react";
import classes from "./ProductDetail.module.css";
import LayOut from "../../Component/Layout/Layout";
import axios from "axios";
import ProductCard from "../../Component/Product/ProductCard";
import { useParams } from "react-router";
import { productUrl } from "../../Api/endPoints";
import Loader from "../../Component/Loader/Loader";

function ProductDetail() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <LayOut>
        {isLoading ? <Loader /> : <ProductCard product={product} flex={true} renderDesc={true}/>}
      </LayOut>
    </>
  );
}

export default ProductDetail;
