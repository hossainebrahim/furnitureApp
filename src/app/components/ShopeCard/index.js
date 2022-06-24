import React from "react";
import Info from "./Info";
import Images from "./Images";

const ShopeCard = () => {
  return (
    <>
      <div className="bg-[#faf5f5]">
        <div className="flex container py-9">
          <div className="row">
            <div className="col-md-6">
              <Images img="https://media.architecturaldigest.com/photos/61ead439c830527fda2b5ce4/master/w_1920,h_1344,c_limit/Modloft%20Cabrini%20Coffee%20Table.jpg" />
            </div>
            <div className="col-md-6">
              <Info
                title="The Coffee Table"
                dis="The perfect companion for your sofa.Sturdy , powder coated steel legs attach in seconds to a surface sized ti fit everything you need close at hand. High-grade  plywood is finished with timeless birch or FSC certified walnut veneer.Available in oval or round"
              />
            </div>
          </div>
        </div>
        <div className="flex container py-9 pt-20">
          <div className="row">
            <div className="col-md-6">
              <Info
                title="The Shelving System"
                dis="The perfect companion for your sofa.Sturdy , powder coated steel legs attach in seconds to a surface sized ti fit everything you need close at hand. High-grade  plywood is finished with timeless birch or FSC certified walnut veneer.Available in oval or round"
              />
            </div>
            <div className="col-md-6">
              <Images img="https://storage.googleapis.com/gen-atmedia/2/2016/05/098facab3cc67d1fdf509ea2d07f5bc2bf244843.jpeg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopeCard;
