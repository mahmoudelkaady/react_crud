import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LoadingScrean from "../loadingScrean/LoadingScrean";
import Swal from "sweetalert2";

export default function AllProducts({ allproducts, getAllProducts }) {
  async function deleteProduct(proId) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success ms-2",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: `You won't be able to revert ${proId.title.slice(
          0,
          proId.title.indexOf(" ", 15)
        )} !`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`http://localhost:3000/products/${proId.id}`)
            .then(() => {
              getAllProducts();
            })
            .catch((error) => {
              console.log("Error", error);
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      {allproducts ? (
        <>
          <h2 className="py-4">All Products</h2>
          <Link to={"add"}>
            <button className="btn btn-success">Add New Product</button>
          </Link>
          <table className="table table-striped mt-3">
            <thead>
              <tr>
                <th>ID</th>
                <th className="text-center">Title</th>
                <th>Price</th>
                <th className="text-center">Editing</th>
              </tr>
            </thead>
            <tbody>
              {allproducts.map(function (ele, idx) {
                return (
                  <tr key={idx}>
                    <td>{ele.id}</td>
                    <td className="text-center">
                      {ele.title.slice(0, ele.title.indexOf(" ", 15))}...
                    </td>
                    <td> {ele.price}$</td>
                    <td className="text-center">
                      <button
                        onClick={function () {
                          deleteProduct(ele);
                        }}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                      <Link to={`/allproducts/${ele.id}`}>
                        <button className="btn btn-info mx-2 btn-sm">
                          View
                        </button>
                      </Link>
                      <button className="btn btn-primary  btn-sm">
                        Deatails
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <LoadingScrean />
      )}
    </>
  );
}
