import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../helpers/variables";
import "./DetailsPage.css";

interface Product {
  id: number;
  image: any;
  description: string;
  title: string;
  price: number;
  characters: string;
  video?: undefined;
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

  return (
    <div className="details__container">
      <div className="details_inner">
        <img
          className="details__img"
          src={oneProduct?.image}
          alt="image"
        />
        <video className="video-slider" autoPlay muted loop src={oneProduct?.video}></video>
        <div className="details__title">
          <h2>{oneProduct?.title}</h2>
          <p>{oneProduct?.description}</p>
        </div>

        <div className="details__info">
          <div className="details__cta">
            <span>
              Price: <b>{oneProduct?.price}$</b>
            </span>
            <button>Buy</button>
          </div>

          <p>
            <b>Characters</b>: {oneProduct?.characters}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
