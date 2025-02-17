import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";

function ProductCard(props) {
  const { image, title, id, rating, price } = props.product;
  // Assuming rating is an object like { rate: 4.5, count: 100 }

  const handleAddToCart = (product) => {
    // Implement your add to cart logic here
    console.log("Added to cart:", product);
    // Example: Dispatch an action to update the cart state
    // dispatch(addToCart(product));
  };

  return (
    <div key={id}>
      <a href={`/products/${id}`}>
        <img src={image} alt={title} />
      </a>
      <div>
        <h3>{title}</h3>
        <div>
          {/* rating */}
          <Rating value={rating.rate} precision={0.1} readOnly />
          {/* rating counter */}
          <small>{rating.count} ratings</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        <button onClick={() => handleAddToCart(props.product)}>
          add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
