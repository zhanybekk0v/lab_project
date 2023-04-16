// import React, { useState, useRef, useEffect } from 'react';
// import './Slider.css';

// import SliderImage1 from '../assets/image/1.jpg';
// import SliderImage2 from '../assets/image/2.jpg';
// import SliderImage3 from '../assets/image/3.jpg';
// import SiderGif from '../assets/image/mersedes_gif.webp'

// interface SliderImage {
//   id: number;
//   src: string;
// }

// const Slider = (): JSX.Element => {
//   const [sliderCount, setSliderCount] = useState<number>(0);
//   const [sliderWidth, setSliderWidth] = useState<number>(0);

//   const sliderImages: SliderImage[] = [
//     { id: 1, src: SliderImage1 },
//     { id: 2, src: SliderImage2 },
//     { id: 3, src: SliderImage3 },
//     { id: 4, src: SiderGif }
//   ];

//   const sliderLine = useRef<HTMLDivElement>(null);

//   const nextSlide = (): void => {
//     setSliderCount(sliderCount + 1);

//     if (sliderCount >= sliderImages.length - 1) {
//       setSliderCount(0);
//     }
//   };

//   const prevSlide = (): void => {
//     setSliderCount(sliderCount - 1);

//     if (sliderCount <= 0) {
//       setSliderCount(sliderImages.length - 1);
//     }
//   };

//   useEffect(() => {
//     if (sliderLine.current) {
//       setSliderWidth(sliderLine.current.offsetWidth);
//     }
//   }, []);

//   useEffect(() => {
//     if (sliderLine.current) {
//       sliderLine.current.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
//     }
//   }, [sliderCount, sliderWidth]);

//   // setInterval(() => {
//   //   nextSlide()
//   // }, 10000);

//   return (
//     <div className="slider">
//       <div className="slider__line" ref={sliderLine}>
//         {sliderImages.map((image: SliderImage) => (
//           <div key={image.id} className="slider__img">
//             <img src={image.src} alt="" />
//             <button className='btn_more'>more</button>
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
//       </div>
//     </div>
//   );
// };

// export default Slider;

