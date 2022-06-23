import React from "react";

const Product = ({ img, btn }) => {
  return (
    <div className="flex flex-col relative border-2 mt-7">
      <img src={img} alt="" className="h-72" />
      <button className="btn btn-dark absolute bottom-4 left-6">{btn}</button>
    </div>
  );
};

export default Product;
