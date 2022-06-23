import React from "react";

const Images = ({ img }) => {
  return (
    <div className="container">
      <img className="h-[400px]" src={img} alt="" />
    </div>
  );
};

export default Images;
