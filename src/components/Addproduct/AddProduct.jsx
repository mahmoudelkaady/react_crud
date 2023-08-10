import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const user = {
    title: "",
    price: "",
    image: "",
    description: "",
    category: "",
  };
  const navi = useNavigate();

  async function addproduct(obj) {
    try {
      const data = await axios.post("http://localhost:3000/products", obj);
      navi("/allproducts");
    } catch (error) {
      console.log("Error", error);
    }
  }

  const formik = useFormik({
    initialValues: user,
    onSubmit: function (values) {
      // the value now has the inputs values
      addproduct(values);
    },
    validate: function (values) {
      const errors = {};

      if (values.title.length < 3 || values.title.length > 15) {
        errors.title = "Title must be more than 3 characters and less than 15";
      }

      if (
        isNaN(values.price) ||
        parseFloat(values.price) <= 0 ||
        values.price === ""
      ) {
        errors.price = "Price must be a valid number and greater than 0";
      }

      if (
        !values.image.includes("https://") ||
        values.image.includes(".com") === false
      ) {
        errors.image = "Link must be valid";
      }
      return errors;
    },
  });

  return (
    <>
      <h1 className="p-2 text-center text-success">Add Product </h1>
      <form className=" w-75 m-auto mt-3" onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            {...formik.getFieldProps("title")}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Title"
            aria-describedby="titleHelp"
          />
          <div id="titleHelp" className="form-text text-primary">
            try to choose clear title
          </div>
          {formik.errors.title && formik.touched.title ? (
            <div className="fs-6 text-danger">{formik.errors.title}</div>
          ) : (
            ""
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="proPrice" className="form-label">
            Price
          </label>
          <input
            {...formik.getFieldProps("price")}
            type="text"
            className="form-control"
            id="proPrice"
            placeholder="Price"
          />
          {formik.errors.price && formik.touched.price ? (
            <div className="fs-6 text-danger">{formik.errors.price}</div>
          ) : (
            ""
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="img" className="form-label">
            img
          </label>
          <input
            {...formik.getFieldProps("image")}
            type="text"
            className="form-control"
            id="img"
            placeholder="img link"
          />
          {formik.errors.image && formik.touched.image ? (
            <div className="fs-6 text-danger">{formik.errors.image}</div>
          ) : (
            ""
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
