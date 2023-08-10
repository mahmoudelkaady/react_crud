import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="row w-100 ">
        <div className="col-2 text-bg-light vh-100 text-start p-0 mx-0 index">
          <Sidebar />
        </div>
        <div className="col-10   ">
          <Outlet />
        </div>
      </div>
    </>
  );
}
