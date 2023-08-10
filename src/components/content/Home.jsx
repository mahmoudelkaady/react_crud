import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingScrean from "../loadingScrean/LoadingScrean";

export default function Home({ allproducts, getAllProducts }) {
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      {/* to make a loading screan , use if with (?) or use (&&) don't use  else condition  */}
      {allproducts.length !== 0 ? (
        <div className="container">
          <div className="row">
            {allproducts.map(function (ele, index) {
              return (
                <div key={allproducts[index].id} className="col-md-3 ">
                  <Link to={`allproducts/${ele.id}`}>
                    <div className="index  item bg-primary  text-white rounded overflow-hidden m-2 position-relative">
                      <div className="text-white">
                        <img
                          className="img-fluid"
                          src={ele.image}
                          alt={ele.title}
                        />
                        <h6 className="ps-2 pt-2 fw-bold text-center">
                          {ele.title.slice(0, ele.title.indexOf(" ", 15))}
                        </h6>
                        <h6 className="ps-2 pt-2 fw-bold text-center">
                          price : {ele.price}$
                        </h6>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <LoadingScrean />
      )}
    </>
  );
}
