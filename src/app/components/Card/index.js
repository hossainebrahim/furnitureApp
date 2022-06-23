import React from "react";
import { FaTruck } from "react-icons/fa";

function Card({ title, dis }) {
  return (
    <>
      <div className="py-20">
        <div className="flex items-center">
          <div className="bg-gray-100 p-3 rounded-full mr-8">
            <FaTruck color="red" size={30} />
          </div>
          <div>
            <h3 className="text-2xl">{title}</h3>
            <p className="w-4/5">{dis}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
