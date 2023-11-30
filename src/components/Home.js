import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
