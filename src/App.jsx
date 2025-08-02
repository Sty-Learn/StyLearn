import React from "react";
import "./connection";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout/Layout";
import Courses from "./pages/Courses";
import Learn from "./pages/Learn";
import DashboardLayout from "./Layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="browse" element={<Courses />} />
      </Route>
      <Route path="/dashboard"  element={<Dashboard />} />
      <Route path="learn" element={<DashboardLayout />}>
        <Route index element={<Learn />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return (
    <div className="max-w-[1550px] mx-auto font-DM-Sans font-[300]">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
