import React from "react";
import logo from "../assets/favicon.svg";
import { Link } from "react-router-dom";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";

const MobileNav = () => {
  const { open } = useAppKit();
  const { isConnected } = useAppKitAccount();

  return (
    <header className="lg:hidden md:hidden flex  justify-between items-center w-[90%] mx-auto py-6">
      {!isConnected ? (
        <Link to="/" className="cursor-pointer">
          <img src={logo} alt="" className="w-[60px] h-[60px]" />
        </Link>
      ) : (
        <img src={logo} alt="" className="w-[60px] h-[60px]" />
      )}

      {!isConnected ? (
        <button
          onClick={() => open()}
          className="bg-primary py-4 px-6 font-Lora font-[700] rounded-lg cursor-pointer hover:bg-transparent hover:border-2  hover:border-white text-[16px]"
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

export default MobileNav;
