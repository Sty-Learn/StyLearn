import React from "react";
import heroImg from "../assets/hero.svg";

const Home = () => {
  return (
    <main>
      <section className="flex lg:flex-row md:flex-row flex-col justify-between lg:w-[90%] md:w-[90%] w-[95%] mx-auto my-16">
        <div className="lg:w-[45%] md:w-[45%] w-[100%] lg:px-0 md:px-0 px-4 mb-4">
          <h1 className="lg:text-[52px] md:text-[48px] text-[32px] font-Lora font-[800] lg:text-left md:text-left text-center">
            <span className="text-orange drop-shadow-2xl"> Master</span> Stylus, Unlock New <span className="text-orange drop-shadow-2xl">Possibilities.</span>
          </h1>
          <p className="lg:text-[24px] md:text-[24px] text-[20px] my-6 lg:leading-10 md:leading-10 leading-16">
            Unlock your potential with immersive courses, real-world projects,
            and a vibrant community of learners. From mastering essential skills
            to exploring cutting-edge innovations, your journey starts here.
          </p>
          <button className="bg-primary py-4 px-8 font-Lora font-[700] lg:w-[60%] md:w-[50%] w-[100%]  rounded-lg">
            Get Started
          </button>
        </div>
        <div className="lg:w-[32%] md:w-[32%] w-[100%] lg:px-0 md:px-0 px-4 mb-4">
          <img src={heroImg} alt="" />
        </div>
        <div className="lg:w-[20%] md:w-[20%] w-[100%] lg:text-right md:text-right text-center lg:px-0 md:px-0 px-4 mb-4">
          <h2 className="lg:text-[32px] md:text-[32px] text-[24px] mb-8 font-Lora font-[800]">Get Started in 3 Steps</h2>
          <div className="my-6">
            <h3 className="text-[18px] mb-4 font-[500] font-Lora">Sign Up for Free:</h3>
            <p className="text-[16px]">Create an account to access courses and resources.</p>
          </div>
          <div className="my-6">
            <h3 className="text-[18px] mb-4 font-[500] font-Lora">Pick a Path:</h3>
            <p className="text-[16px]">Choose a learning track that matches your language skill</p>
          </div>
          <div className="my-6">
            <h3 className="text-[18px] mb-4 font-[500] font-Lora">Start Practicing:</h3>
            <p className="text-[16px]">Engage with interactive tutorials and practical hands-on challenges.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
