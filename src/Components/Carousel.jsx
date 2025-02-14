import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

const CustomCarousel = ({ slides }) => {
  return (
    <Carousel
      showArrows={false}
      autoPlay
      interval={2000}
      infiniteLoop
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
    >
      {slides.map((slide, index) => (
        <div
        key={index}
        className={`mx-8 h-[450px] my-4 rounded-3xl bg-cover bg-center ${slide.className}`}>      
          <div className="flex justify-end">
            <h1 className="font-semibold py-20 text-3xl mt-20 sm:text-4xl md:text-[48px] font-serif sm:mx-8 sm:p-12">
              {slide.title}
              <br /> <br />
              {slide.subtitle}
            </h1>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
