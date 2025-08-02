import React, { useState } from "react";
import { courseData } from "../Data/courseData";
import { Modal, Box } from "@mui/material";
import { IoTimeSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const DashboardModal = ({ id }) => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true);
  const navigate = useNavigate();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "30px",
    boxShadow: 24,
    bgcolor: "#2A2B2B",
  };

  const filteredData = courseData.filter((info) => info.id === id);

  return (
    <div>
      <button onClick={handleOpenModal}>View More...</button>
      <Modal open={showModal} onClose={handleCloseModal}>
        <Box sx={style} className="w-[90%] lg:w-[30%] md:w-[30%] text-white border border-white/30">
          {filteredData.map((info) => (
            <div key={info.id}>
              <div className="bg-darkGrey p-6 flex justify-center items-center rounded-tr-2xl rounded-tl-2xl h-[150px]">
                <img src={info.icon} alt="" />
              </div>
              <div className="py-6 mx-6 border-t border-white">
                <p className="text-[16px] flex justify-between items-center mb-8 font-[200]">
                  {info.lesson} Lessons
                  <span className="flex items-center">
                    <IoTimeSharp className="mr-2" /> {info.time} Hours
                  </span>
                </p>
                <h2 className="lg:text-[24px] md:text-[24px] text-[20px] font-Lora font-[600]">
                  {info.title}
                </h2>
                <p className="my-4 text-[16px] font-[300]">
                  {info.description}
                </p>
                <p className="my-4 text-[16px] font-[300]">{info.moreInfo}</p>
                <p className="my-4 text-[16px] font-[300]">{info.moreInfo2}</p>
                <p className="my-4 text-[16px] font-[300]">{info.moreInfo3}</p>
              {info.status === "enrol" ? (<button onClick={() => navigate('/learn')}
                  className="bg-primary py-3 px-8 font-Lora font-[700] w-[100%] rounded-lg cursor-pointer hover:bg-transparent hover:border-2  hover:border-white"
                >
                  Enrol
                </button>) : (<button
                  className="bg-grey py-3 px-8 font-Lora font-[700] w-[100%] rounded-lg cursor-pointer hover:bg-transparent" disabled
                >
                  Coming Soon
                </button>)}
              </div>
            </div>
          ))}
        </Box>
      </Modal>
    </div>
  );
};

export default DashboardModal;
