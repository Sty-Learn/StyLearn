import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { courseData } from "../Data/courseData";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  padding: 4,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
};

const CourseSlider = () => {
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {courseData.map((info) => (
          <div
            key={info.id}
            className="bg-deepGrey lg:w-[32%] md:w-[32%] w-[100%] flex flex-col rounded-2xl mx-4 h-[380px]"
          >
            <div className="bg-darkGrey p-6 flex justify-center items-center rounded-tr-2xl rounded-tl-2xl h-[150px]">
              <img src={info.icon} alt="" />
            </div>
            <div className="p-4">
              <h2 className="lg:text-[24px] md:text-[24px] text-[20px] font-Lora font-[600]">
                {info.title}
              </h2>
              <p className="my-4 text-[16px] font-[300]">{info.description}</p>
              <a href=""></a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CourseSlider;
