import React, { useState } from "react";

function Hero() {
  const [HeroImg, setHeroImg] = useState({
    one: true,
    two: false,
    three: false,
  });

  const handerHeroControls = (data) => {
    if (data === "one") {
      setHeroImg({
        one: true,
        two: false,
        three: false,
      });
    } else if (data === "two") {
      setHeroImg({
        one: false,
        two: true,
        three: false,
      });
    } else if (data === "three") {
      setHeroImg({
        one: false,
        two: false,
        three: true,
      });
    }
  };

  return (
    <div className="bg-[#faf5f5] h-auto py-3">
      <div className="container flex justify-between">
        <div className="row">
          <div className="col-md-4">
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
          <div className="col-md-8">
            <div className=" flex flex-row h-[490px] space-x-3">
              <img
                className="w-1/4 cursor-pointer object-cover hover:w-1/2  transition-all"
                src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZ1dHVyZSUyMGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <img
                className="w-1/4 cursor-pointer object-cover hover:w-1/2  transition-all"
                src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <img
                className="w-1/4 cursor-pointer object-cover hover:w-1/2 transition-all"
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

//https://course-api.com/react-store-products
