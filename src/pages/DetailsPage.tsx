import React from "react";
import { products } from "../helpers/variables";

const DetailsPage = () => {
  return (
    <div>
      {products.map((product) => (
        <p key={product.id}>
          {product.charackters}
          {product.description}
          {product.image}
          {product.price}
          {product.title}
        </p>
      ))}
    </div>
  );
};

export default DetailsPage;
