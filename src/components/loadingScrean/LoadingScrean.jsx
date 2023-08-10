import React from "react";

export default function LoadingScrean() {
  return (
    <>
      <div className="vh-100 d-flex bg-primary justify-content-center align-items-center opacity-50 ">
        <i className="fa-solid fa-spinner fa-spin text-white fa-7x"></i>
      </div>
    </>
  );
}
