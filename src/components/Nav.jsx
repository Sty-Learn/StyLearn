import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";

const Nav = () => {
  const { open } = useAppKit();
  const { isConnected } = useAppKitAccount();

  return (
    <header className="lg:flex md:flex hidden justify-between items-center w-[90%] mx-auto py-6">
      {!isConnected ? (
        <Link to="/" className="cursor-pointer">
          <img src={logo} alt="" />
        </Link>
      ) : (
        <img src={logo} alt=""  />
      )}
      {!isConnected ? (
        <button
          onClick={() => open()}
          className="bg-primary py-4 px-8 font-Lora font-[700] rounded-lg cursor-pointer hover:bg-transparent hover:border-2  hover:border-white"
        >
          Connect Wallet
        </button>
      ) : (
        <div className="bg-dark">
        <w3m-button />
        </div>
      )}
    </header>
  );
};

export default Nav;
