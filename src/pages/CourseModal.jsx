import React, { useState } from "react";
import { courseData } from "../Data/courseData";
import { Modal, Box } from "@mui/material";

const CourseModal = ({ id }) => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    borderRadius: "30px",
    border: "1px solid #e0bb8395",
    boxShadow: 24,
    bgcolor: "#8F8F90",
  };

  const filteredData = courseData.filter((info) => info.id === id);

  return (
    <div>
      <button onClick={handleOpenModal}>View More...</button>
      <Modal open={showModal} onClose={handleCloseModal}>
        <Box sx={style}>
          {filteredData.map((info) => (
            <div
              key={info.id}
            //   className="bg-deepGrey lg:w-[32%] md:w-[32%] w-[100%] flex flex-col rounded-2xl mx-4 h-[380px]"
            >
              <div className="bg-darkGrey p-6 flex justify-center items-center rounded-tr-2xl rounded-tl-2xl h-[150px] text-da">
                <img src={info.icon} alt="" />
              </div>
              <div className="p-4">
                <h2 className="lg:text-[24px] md:text-[24px] text-[20px] font-Lora font-[600]">
                  {info.title}
                </h2>
                <p className="my-4 text-[16px] font-[300]">{info.description}</p>
                <p className="my-4 text-[16px] font-[300]">{info.moreInfo}</p>
                <p className="my-4 text-[16px] font-[300]">{info.moreInfo2}</p>
                <p className="my-4 text-[16px] font-[300]">{info.moreInfo3}</p>
              </div>
              <w3m-button />
            </div>
          ))}
        </Box>
      </Modal>
    </div>
  );
};

export default CourseModal;