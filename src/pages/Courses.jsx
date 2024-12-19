import React from "react";
import bgImg from "../assets/bg.svg";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

const Courses = () => {
  return (
    <main>
      <Nav />
      <section className="flex lg:flex-row md:flex-row flex-col justify-between lg:w-[90%] md:w-[90%] w-[95%] mx-auto my-16">
        <div className="lg:w-[50%] md:w-[50%] w-[100%] lg:px-0 md:px-0 px-4 mb-4">
          <h1 className="lg:text-[52px] md:text-[48px] text-[32px] font-Lora font-[800] lg:text-left md:text-left text-center">
            <span
              className="text-primary"
              style={{ textShadow: "2px 2px rgba(0, 0, 0, 0.2)" }}
            >
              {" "}
              Find
            </span>{" "}
            the Perfect Course to Elevate Your{" "}
            <span
              className="text-primary"
              style={{ textShadow: "2px 2px rgba(0, 0, 0, 0.2)" }}
            >
              Skills.
            </span>
          </h1>
          <p className="lg:text-[24px] md:text-[24px] text-[20px] my-6 lg:leading-10 md:leading-10 leading-6  lg:text-left md:text-left text-center">
            Explore a wide range of courses designed for every level, from
            beginner to advanced. Whether you're diving into Stylus or mastering
            the Arbitrum ecosystem, we have the right path for you.
          </p>
          <Link to="browse">
            <button className="bg-primary py-4 px-8 font-Lora font-[700] lg:w-[60%] md:w-[50%] w-[100%]  rounded-lg cursor-pointer hover:bg-transparent hover:border-2  hover:border-white">
              Start Learning Now
            </button>
          </Link>
        </div>
        <div className="lg:w-[45%] md:w-[45%] w-[100%] lg:px-0 md:px-0 px-4 mb-4">
          <img src={bgImg} alt="" />
        </div>
      </section>
      <section>
        
      </section>
    </main>
  );
};

export default Courses;
