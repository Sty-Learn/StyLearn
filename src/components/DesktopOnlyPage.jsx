import React, { useState, useEffect } from "react";
import { Modal, Box } from "@mui/material";
import { PiWarningCircleFill } from "react-icons/pi";

const DesktopOnlyPage = ({ children }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true);

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();
    handleOpenModal();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: 24,
    bgcolor: "#2A2B2B",
  };

  return (
    <div
      style={{
        filter: isDesktop ? "none" : "blur(8px)",
        pointerEvents: isDesktop ? "auto" : "none",
      }}
    >
      {!isDesktop && (
        <Modal open={showModal} onClose={handleCloseModal}>
          <Box sx={style} className="w-[90%] lg:w-[30%] md:w-[30%]">
            <div className="flex p-4 items-center">
            <PiWarningCircleFill className="text-[70px] mr-2 text-red-500" /> 
            <p className="text-white w-[80%] text-[14px]">This application is optimized for desktop screens. Please switch to a larger screen for the best experience.</p>
            </div>
          </Box>
        </Modal>
      )}
      {children}
    </div>
  );
};

export default DesktopOnlyPage;
