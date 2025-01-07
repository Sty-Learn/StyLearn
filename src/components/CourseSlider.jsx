import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { courseData } from "../Data/courseData";
import CourseModal from "../pages/CourseModal";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  centerMode: true,
  centerPadding: 30,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  
  className: 'custom-style',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
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

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

const CourseSlider = () => {
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {courseData.map((info) => (
          <div 
            key={info.id}
            className="mx-6"
          >
            <div className="bg-deepGrey rounded-2xl w-[95%]">
            <div className="bg-darkGrey p-6 flex justify-center items-center rounded-tr-2xl rounded-tl-2xl h-[150px]">
              <img src={info.icon} alt="" />
            </div>
            <div className="px-4 py-8">
              <h2 className="lg:text-[24px] md:text-[24px] text-[20px] font-Lora font-[600]">
                {info.title}
              </h2>
              <p className="my-4 text-[14px] font-[300]"> {truncateText(info.description, 80)}...</p>
              <CourseModal id={info.id} />
            </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CourseSlider;
