// import React, { useState } from 'react'
// import first_img from '../assets/image/1.jpg'
// import second_img from '../assets/image/2.jpg'
// import third_img from '../assets/image/3.jpg'
// import './Slider.css'

// const Slider = () => {

//   const [slider, setSlider] = useState(0)


//     function renderRolls() {

//     }

//   return (
//     <div>
//       <main className='main'>
//         <div className="slider">
//           <div className="slider__line">

//             <img className='slider__img' src={first_img} alt="" />
//             <img className='slider__img' src={second_img} alt="" />
//             <img className='slider__img' src={third_img} alt="" />
//           </div>
//           <button className='slider__btn-prev'>&#10148;</button>
//           <button className='slider__btn-next'>&#10148;</button>
//         </div>
//       </main>
//     </div>
//   )
// }
// export default Slider
import React, { useState, useRef, useEffect } from 'react';
import './Slider.css';

import SliderImage1 from '../assets/image/1.jpg';
import SliderImage2 from '../assets/image/2.jpg';
import SliderImage3 from '../assets/image/3.jpg';

interface SliderImage {
  id: number;
  src: string;
}

const Slider = (): JSX.Element => {
  const [sliderCount, setSliderCount] = useState<number>(0);
  const [sliderWidth, setSliderWidth] = useState<number>(0);

  const sliderImages: SliderImage[] = [
    { id: 1, src: SliderImage1 },
    { id: 2, src: SliderImage2 },
    { id: 3, src: SliderImage3 },
  ];

  const sliderLine = useRef<HTMLDivElement>(null);

  const nextSlide = (): void => {
    setSliderCount(sliderCount + 1);

    if (sliderCount >= sliderImages.length - 1) {
      setSliderCount(0);
    }
  };

  const prevSlide = (): void => {
    setSliderCount(sliderCount - 1);

    if (sliderCount <= 0) {
      setSliderCount(sliderImages.length - 1);
    }
  };

  useEffect(() => {
    if (sliderLine.current) {
      setSliderWidth(sliderLine.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    if (sliderLine.current) {
      sliderLine.current.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
    }
  }, [sliderCount, sliderWidth]);

  setInterval(() => {
    nextSlide()
  }, 5000);

  return (
    <div className="slider">
      <div className="slider__line" ref={sliderLine}>
        {sliderImages.map((image: SliderImage) => (
          <div key={image.id} className="slider__img">
            <img src={image.src} alt="" />
            <button>more</button>
          </div>
        ))}
      </div>
      <button className="slider__btn-prev" onClick={prevSlide}>
        &#10148;
      </button>
      <button className="slider__btn-next" onClick={nextSlide}>
        &#10148;
      </button>
    </div>
  );
};

export default Slider;

