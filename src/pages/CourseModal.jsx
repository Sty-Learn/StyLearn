import React from "react";
import { courseData } from "../Data/courseData";
import {
    Modal,
    Box,
  } from "@mui/material";

const CourseModal = ({id}) => {
    const [showModal, setShowModal] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    borderRadius: "30px",
    border: "1px solid #e0bb8395",
    boxShadow: 24,
    bgcolor: "background.paper",
  };

  return (
    <div>
      <Modal open={showModal} onClose={handleCloseModal}>
        <Box sx={style}>
          {searchResult ? (
            <div>
              <div
                className="bg-cover h-[20vh] bg-left-bottom rounded-tr-[30px] rounded-tl-[30px]"
                style={{ backgroundImage: `url(${bannerImg})` }}
              ></div>
              <div className="py-6 flex flex-col px-8">
                <p className="hidden">ID: {searchResult.id}</p>
                <p>Name: {searchResult.name}</p>
                <p>Email: {searchResult.email}</p>
                <p>
                  Location: {searchResult.country}, {searchResult.location}
                </p>
                <p>Role: {searchResult.role}</p>
                <Checkin
                  email={searchResult.email}
                  day={day}
                  verified={verified}
                  handleCloseModal={handleCloseModal}
                />
              </div>
            </div>
         
        </Box>
      </Modal>
    </div>
  );
};

export default CourseModal;
