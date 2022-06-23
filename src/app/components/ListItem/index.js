import React from "react";

const ListItem = () => {
  return (
    <div className="py-16">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="col-md-6">
            <div>
              <h1 className="text-5xl">
                Discover the interior design of your drams
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio voluptas pariatur veniam sapiente perspiciatis? Ullam
                aliquid iusto nihil voluptatem beatae?
              </p>
              <button className="btn btn-dark mb-4">Get inspired</button>
              <img
                src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
