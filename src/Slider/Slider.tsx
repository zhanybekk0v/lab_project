// import React, { useState, useRef, useEffect } from "react";
// import "./Slider.css";
// import { useNavigate, useParams } from "react-router";
// import { products } from "../helpers/variables";

// const Slider = (): JSX.Element => {
//   const [sliderCount, setSliderCount] = useState<number>(0);
//   const [sliderWidth, setSliderWidth] = useState<number>(0);

//   const sliderLine = useRef<HTMLDivElement>(null);

//   const nextSlide = (): void => {
//     setSliderCount(sliderCount + 1);

//     if (sliderCount >= products.length - 1) {
//       setSliderCount(0);
//     }
//   };

//   const prevSlide = (): void => {
//     setSliderCount(sliderCount - 1);

//     if (sliderCount <= 0) {
//       setSliderCount(products.length - 1);
//     }
//   };

//   useEffect(() => {
//     if (sliderLine.current) {
//       setSliderWidth(sliderLine.current.offsetWidth);
//     }
//   }, []);

//   useEffect(() => {
//     if (sliderLine.current) {
//       sliderLine.current.style.transform = `translateX(${
//         -sliderCount * sliderWidth
//       }px)`;
//     }
//   }, [sliderCount, sliderWidth]);

//   // setInterval(() => {
//   //   nextSlide()
//   // }, 10000);

//   const navigate = useNavigate();

//   return (
//     <div className="slider">
//       <div className="slider__line" ref={sliderLine}>
//         {products.map((product) => (
//           <div key={product.id} className="slider__img">
//             <img src={product.image} alt="" />
//             <button
//               onClick={() => navigate(`/details/${product.id}`)}
//               className="btn_more"
//             >
//               more
//             </button>
//           </div>
//         ))}
//       </div>
//       <button className="slider__btn-prev" onClick={prevSlide}>
//         &#10148;
//       </button>
//       <button className="slider__btn-next" onClick={nextSlide}>
//         &#10148;
//       </button>
//       <div className="pagination">
//         <span className="active"></span>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//     </div>
//   );
// };

// export default Slider;



import React, { useState, useRef, useEffect } from "react";
import "./Slider.css";
import { useNavigate, useParams } from "react-router";
import { products } from "../helpers/variables";

const Slider = (): JSX.Element => {
  const [sliderCount, setSliderCount] = useState<number>(0);
  const [sliderWidth, setSliderWidth] = useState<number>(0);
  const navigate = useNavigate();
  
  const sliderLine = useRef<HTMLDivElement>(null);

  const nextSlide = (): void => {
    setSliderCount((prevCount) => {
      const newCount = prevCount + 1;
      return newCount >= products.length ? 0 : newCount;
    });
  };

  const prevSlide = (): void => {
    setSliderCount((prevCount) => {
      const newCount = prevCount - 1;
      return newCount < 0 ? products.length - 1 : newCount;
    });
  };

  useEffect(() => {
    if (sliderLine.current) {
      setSliderWidth(sliderLine.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    if (sliderLine.current) {
      sliderLine.current.style.transform = `translateX(${
        -sliderCount * sliderWidth
      }px)`;
    }
  }, [sliderCount, sliderWidth]);

  const paginationButtons = Array.from({ length: products.length }).map(
    (_, index) => (
      <span
        key={index}
        className={index === sliderCount ? "active" : ""}
        onClick={() => setSliderCount(index)}
      />
    )
  );

  return (
    <div className="slider">
      <div className="slider__line" ref={sliderLine}>
        {products.map((product) => (
          <div key={product.id} className="slider__img">
            <img src={product?.image} alt="" />
            <video className="video-slide" autoPlay muted loop src={product.video}></video>
            <button
              onClick={() => navigate(`/details/${product.id}`)}
              className="btn_more"
            >
              more
            </button>
          </div>
        ))}
      </div>
      <button className="slider__btn-prev" onClick={prevSlide}>
        &#10148;
      </button>
      <button className="slider__btn-next" onClick={nextSlide}>
        &#10148;
      </button>
      <div className="pagination">{paginationButtons}</div>
    </div>
  );
};

export default Slider;


