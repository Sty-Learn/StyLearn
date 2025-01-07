import React, { useState } from "react";
import bgImg from "../assets/bg.svg";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import CourseSlider from "../components/CourseSlider";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import MobileNav from "../components/MobileNav";

const Courses = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function CustomTabPanel(props) {
    const { children, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <main>
      <Nav />
      <MobileNav />
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
      <section className="lg:w-[90%] md:w-[90%] w-[95%] mx-auto">
        <h2 className="lg:text-[42px] md:text-[42px] text-[24px] font-Lora">Courses</h2>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="white"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#D75127",
              }}}
            sx={{
              ".MuiTabs-flexContainer": {
                justifyContent: "center", 
              },
            }}
          >
            <Tab label="Technical" {...a11yProps(0)} sx={{ color: "white" }}/>
            <Tab label="Non-Technical" {...a11yProps(1)} sx={{ color: "white" }} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <CourseSlider />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className="bg-deepGrey lg:w-[32%] md:w-[32%] w-[100%] flex flex-col rounded-2xl mx-4 h-[380px]">
            <div className="bg-darkGrey p-6 flex justify-center items-center rounded-tr-2xl rounded-tl-2xl h-[150px] ">
              <img src="https://styles.redditmedia.com/t5_37ukv/styles/communityIcon_ym5iq65016561.jpg?format=pjpg&s=54553abb4396ab3dc8ef601c9ee88420a05ea89a" alt="" className="w-[40%]"/>
            </div>
            <div className="p-4">
              <h2 className="lg:text-[24px] md:text-[24px] text-[20px] font-Lora font-[600]">
                Arbitrium DevRel Path
              </h2>
              <p className="my-4 text-[16px] font-[300]">
                Learn the essentials of Developer Relations (DevRel) in the
                Arbitrum ecosystem. Build skills to engage developers, create
                impactful content, and grow vibrant blockchain communities.
              </p>
              <a href=""> </a>
            </div>
          </div>
        </CustomTabPanel>
      </Box>
      </section>
    </main>
  );
};

export default Courses;
