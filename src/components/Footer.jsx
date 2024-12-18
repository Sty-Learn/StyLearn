import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <footer className="flex justify-between items-center w-[90%] mx-auto font-DM-Sans mt-auto py-6">
      <p className="capitalize">
        &copy; all rights reserved - StyLearn team {year}.
      </p>
      <div className="flex items-center text-3xl">
        <FaSquareFacebook className="mr-4" />
        <RiInstagramFill className="mr-4"/>
        <IoLogoYoutube className="mr-4" />
        <FaSquareXTwitter />
      </div>
    </footer>
  );
};

export default Footer;
