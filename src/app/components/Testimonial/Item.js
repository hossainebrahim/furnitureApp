import React from "react";

const Item = ({ emo, dis, url, name, location }) => {
  return (
    <>
      <div className="w-[300px] container">
        <div className=" p-6 bg-[#fff] border-1">
          <div>
            <h1 className="text-4xl">{emo}</h1>
            <p className="text-stone-500">{dis}</p>
          </div>

          <div className="flex">
            <img
              className=" rounded-full w-14 h-14 object-cover mt-3  mr-5"
              src={url}
              alt="man"
            />
            <div>
              <h3>{name}</h3>
              <p>{location}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
