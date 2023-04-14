import React from "react";
import Card from "./Card";

const Slider = () => {
  const slides = [
    {
      key: 1,
      img: "https://www.wsupercars.com/wallpapers-regular/Koenigsegg/2021-Koenigsegg-Jesko-Absolut-007-1080.jpg",
    },
    {
      key: 2,
      img: "https://www.wsupercars.com/wallpapers-regular/Koenigsegg/2021-Koenigsegg-Jesko-Absolut-007-1080.jpg",
    },
    {
      key: 3,
      img: "https://www.wsupercars.com/wallpapers-regular/Koenigsegg/2021-Koenigsegg-Jesko-Absolut-007-1080.jpg",
    },
    {
      key: 4,
      img: "https://www.wsupercars.com/wallpapers-regular/Koenigsegg/2021-Koenigsegg-Jesko-Absolut-007-1080.jpg",
    },
  ];

  return (
    <div className="section">
      <div className="slider">
        <div className="slide">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />

          <div className="st">
            {slides.map((slide) => (
              <img key={slide.key} src={slide.img} alt="slide" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
