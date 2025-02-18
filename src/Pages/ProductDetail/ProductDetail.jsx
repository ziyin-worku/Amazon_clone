import React, { useEffect, useState } from "react";
import classes from "./ProductDetail.module.css";
import LayOut from "../../Component/Layout/Layout";
import axios from "axios";
import ProductCard from "../../Component/Product/ProductCard";
import { useParams } from "react-router";
import { productUrl } from "../../Api/endPoints";

function ProductDetail() {
  const [product, setProduct] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <LayOut>
      <h1 style={{ textAlign: "center", margin: "50px auto" }}>
        product Detail
      </h1>
      <div style={{display:"flex", justifyContent:"center"}}>
        <ProductCard product={product} />
      </div>
    </LayOut>
  );
}

export default ProductDetail;
