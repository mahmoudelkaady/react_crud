import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProDitails() {
  const { proId } = useParams();
  const [proditail, setproditail] = useState(null);
  async function getproDitails() {
    const { data } = await axios.get(`http://localhost:3000/products/${proId}`);
    setproditail(data);
  }

  useEffect(() => {
    getproDitails();
  }, []);

  // to do ternary if  condition in js without (else) u can use &&
  return (
    <>
      {proditail && (
        <div className="row align-items-center p-4">
          <div className="col-4">
            <img className="w-100" src={proditail.image} alt="" />
          </div>
          <div className="col-8">
            <h2 className=" pb-3 ps-3"> {proditail.title} </h2>
            <h4> {proditail.category} </h4>
            <p> {proditail.description} </p>
            <button className="btn btn-primary">
              price : <span className="text-warning">
                {proditail.price}$
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
