import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useAppKitAccount } from "@reown/appkit/react";

const Layout = () => {
  const { isConnected } = useAppKitAccount();

  return isConnected ? (
    <Navigate to={"/dashboard"} />
  ) : (
    <div className="flex flex-col h-[100vh]">
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
