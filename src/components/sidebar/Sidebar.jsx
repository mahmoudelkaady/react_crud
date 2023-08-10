import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <ul className="fs-5  text-center">
        <li className="my-3 py-3">
          <Link to={"/allproducts"}>Get all products</Link>
        </li>
        <li className="">
          <Link to={"/"}>Get all categories</Link>
        </li>
      </ul>
    </>
  );
}
