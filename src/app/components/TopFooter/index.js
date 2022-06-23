import React from "react";

const TopFooter = () => {
  return (
    <div className="py-20">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="flex justify-center items-center flex-col">
              <h1>Join our newsletter for $10 off</h1>
              <p className="w-auto text-center text-stone-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, minus? Explicabo dolorem asperiores omnis corrupti
                cupiditate eligendi amet perspiciatis enim earum, autem
                recusandae aut repellat cumque dolores ab nulla? Dignissimos?
              </p>
              <div>
                <input
                  type="text"
                  placeholder="Enter email"
                  className="border-solid border-2 border-gray-800 sm:py-[10px] sm:px-14 py-2 px-3"
                />
                <input
                  type="button"
                  value="Subscribe"
                  className=" bg-black sm:px-4 sm:py-[12px] text-white  py-[10px] px-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
