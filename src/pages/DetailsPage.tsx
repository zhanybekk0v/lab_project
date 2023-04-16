import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../helpers/variables";

interface Product {
  id: number;
  image: any;
  description: string;
  title: string;
  price: number;
  characters: string;
}

const DetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [oneProduct, setOneProduct] = useState<Product>();

  useEffect(() => {
    const filteredProducts: Product[] = products.filter(
      (product) => product.id === Number(id)
    );
    setOneProduct(filteredProducts[0]);
  }, [id]);

  return <div></div>;
};

export default DetailsPage;
