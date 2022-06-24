import React from "react";
import Card from ".";

const CardItem = () => {
  return (
    <>
      <div className=" container">
        <div className="row">
          <div className="col-md-4">
            <Card
              title="Fast & Free Shipping"
              dis="Ever sing order ships for free.No minimums,no tiers,no fine print
   whatsoever"
            />
          </div>
          <div className="col-md-4">
            <Card
              title="Modular , easy-to-move design"
              dis="Our innovative modular design is driven by the belief that furniture should fit this home "
            />
          </div>
          <div className="col-md-4">
            <Card
              title="Durable ,premium materials"
              dis="We use material like sustainably-forested wood,strengthened steel hardware , and top-grain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardItem;
