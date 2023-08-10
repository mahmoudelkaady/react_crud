import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light m-0  ">
        <Link className="navbar-brand ms-5 text-success fw-bold" to={"/"}>
          Market
        </Link>
      </nav>
    </>
  );
}
