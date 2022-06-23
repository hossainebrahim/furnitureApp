import React from "react";

const Info = ({ title, dis }) => {
  return (
    <>
      <div className="container flex justify-center items-start ml-5 flex-col">
        <h1 className="text-6xl mb-3">{title}</h1>
        <p className="w-[80%] text-gray-500 leading-relaxed mb-4">{dis}</p>
        <button className="btn btn-dark px-4 mb-3">Shop Now</button>
      </div>
    </>
  );
};

export default Info;
