import React, { useEffect, useState } from "react";
import classes from "./Results.module.css";
import LayOut from "../../Component/Layout/Layout";
import { useParams } from "react-router";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Component/Product/ProductCard";
import Loader from "../../Component/Loader/Loader";

function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { categoryName } = useParams();
  // console.log(categoryName);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        // console.log(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category / {categoryName}</p>
          <hr />
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard 
              key={product.id} 
              product={product} 
              renderDesc={false}
              renderAdd={true}
              />
            ))}
          </div>
        </section>
      )}
    </LayOut>
  );
}

export default Results;
