import React from "react";

function Hero() {
  return (
    <div className="bg-[#faf5f5] h-auto">
      <div className="container flex justify-between">
        <div className="row">
          <div className="col-md-5">
            <div className="h-[70vh] flex flex-col justify-center">
              <h1 className="text-[50px] mb-4 font-bold">
                Future <br /> Of furniture
              </h1>
              <p className="text-base">
                Find an elegant and luxurious interior designed by a
                professional interior designer
              </p>
              <div className="input">
                <input
                  type="text"
                  placeholder="Search your product here"
                  className="border-solid border-2 border-gray-800 py-[10px] px-4"
                />
                <input
                  type="button"
                  className=" bg-black px-4 py-[12px] text-white"
                  value="Search"
                />
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className=" flex flex-row h-[500px]">
              <img
                className="w-1/3 cursor-pointer"
                src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZ1dHVyZSUyMGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <img
                className="w-1/3 cursor-pointer"
                src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <img
                className="w-1/3 cursor-pointer"
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

const arry = [
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1579487785973-74d2ca7abdd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1562664377-709f2c337eb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1604328702728-d26d2062c20b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1570126688035-1e6adbd61053?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
];
