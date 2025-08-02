import React, { useState } from "react";
import { courseData } from "../Data/courseData";
import DashboardModal from "../components/DashboardModal";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Navigate } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";
import { useAppKitAccount } from "@reown/appkit/react";

const Dashboard = () => {
  const [value, setValue] = useState(0);
  const { isConnected } = useAppKitAccount()

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

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return !isConnected   ? (
    <Navigate to={"/"} />
  ) : (
    <main className="container">
      <Nav />
      <MobileNav />
      <section>
        <div className="flex flex-col  justify-center items-center text-center mt-10 mb-16">
          <h1 className="lg:text-[52px] md:text-[48px] text-[32px] font-Lora font-[800] text-center capitalize lg:w-[60%] md:w-[60%] w-[95%] mx-auto">
            <span
              className="text-primary"
              style={{ textShadow: "2px 2px rgba(0, 0, 0, 0.2)" }}
            >
              {" "}
              Welcome
            </span>
            , your learning starts{" "}
            <span
              className="text-primary"
              style={{ textShadow: "2px 2px rgba(0, 0, 0, 0.2)" }}
            >
              Here.
            </span>
          </h1>
          <p className="lg:text-[24px] md:text-[24px] text-[18px]  text-center capitalize lg:w-[60%] md:w-[60%] w-[95%] mx-auto">
            Get Started by enrolling in a course today.
          </p>
        </div>
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
                },
              }}
              sx={{
                ".MuiTabs-flexContainer": {
                  justifyContent: "center",
                },
              }}
            >
              <Tab
                label="Technical"
                {...a11yProps(0)}
                sx={{ color: "white" }}
              />
              <Tab
                label="Non-Technical"
                {...a11yProps(1)}
                sx={{ color: "white" }}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div className="flex flex-col lg:flex-row md:flex-row justify-between flex-wrap">
              {courseData.map((info) => (
                <div
                  key={info.id}
                  className="bg-deepGrey rounded-2xl w-[100%] lg:w-[32%] md:w-[32%] mb-4"
                >
                  <div className="bg-darkGrey p-6 flex justify-center items-center rounded-tr-2xl rounded-tl-2xl h-[150px]">
                    <img src={info.icon} alt="" />
                  </div>
                  <div className="px-4 py-8">
                    <h2 className="lg:text-[24px] md:text-[24px] text-[20px] font-Lora font-[600]">
                      {info.title}
                    </h2>
                    <p className="my-4 text-[14px] font-[300]">
                      {" "}
                      {truncateText(info.description, 80)}...
                    </p>
                    <DashboardModal id={info.id} />
                  </div>
                </div>
              ))}
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div className="bg-deepGrey lg:w-[32%] md:w-[32%] w-[100%] flex flex-col rounded-2xl mx-4 h-[380px]">
              <div className="bg-darkGrey p-6 flex justify-center items-center rounded-tr-2xl rounded-tl-2xl h-[150px] ">
                <img
                  src="https://styles.redditmedia.com/t5_37ukv/styles/communityIcon_ym5iq65016561.jpg?format=pjpg&s=54553abb4396ab3dc8ef601c9ee88420a05ea89a"
                  alt=""
                  className="w-[40%]"
                />
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
      <Footer />
    </main>
  );
};

export default Dashboard;
