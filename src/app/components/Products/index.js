import React from "react";
import Product from "./Product";

const Products = () => {
  return (
    <div className="py-12">
      <div className="container">
        <div className="flex justify-between">
          <h1>Shop by Product</h1>
          <p className="w-[30%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod et
            illum distinctio.
          </p>
        </div>
        <div className="row">
          <div className="col-md-3">
            <Product
              img="https://media.istockphoto.com/photos/isolated-round-wooden-table-on-white-picture-id147804845?k=20&m=147804845&s=612x612&w=0&h=hjdSmkpg-FcfsNQfJNx5aMxTcOkbYDkko-vywqQoC4s="
              btn="Tables"
            />
          </div>
          <div className="col-md-3">
            <Product
              img="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580742487-resize.jpg?crop=1xw:1xh;center,top&resize=480:*"
              btn="Chairs"
            />
          </div>
          <div className="col-md-3">
            <Product
              img="https://www.lemamobili.com/media/catalog/product/cache/3053bdc5e078d78e9527b2d380cab5fd/l/e/lema_brick-lane_divani-x3-divano-extracomfort.jpeg"
              btn="Sofas"
            />
          </div>
          <div className="col-md-3">
            <Product
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxqKfJZBbPuAY24m5TKuKfSxQUnsfXk9ZGeg&usqp=CAU"
              btn="Stools"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
