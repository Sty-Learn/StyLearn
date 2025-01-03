import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import Curriculum from "./Curriculum";

const DashboardNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex justify-between items-center w-[90%] mx-auto py-6">
      <Link to="/" className="cursor-pointer">
        <img src={logo} alt="" />
      </Link>
      <div className="flex justify-between items-center">
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          color="#427142"
          direction="right"
        />
        {isOpen && (
         <Curriculum />
        )}
        <button className="bg-primary py-4 px-8 font-Lora font-[700] rounded-lg cursor-pointer hover:bg-transparent hover:border-2  hover:border-white">
          Connect Wallet
        </button>
      </div>
    </header>
  );
};

export default DashboardNav;
