import React from "react";
import { Link } from "react-router-dom";

function Products() {
  return (
    <>
      <div>
        <section className="products" id="products">
          <div className="heading">
            <h2>Choose with our best packages</h2>
            <p>
              {" "}
              <p>
                Le Petale offers you variety of packages to avail. Perfect for
                any events. <br />
                Freebies and discounts are available.
              </p>
            </p>
          </div>
          <div className="products-container">
            <div className="box">
              <a href="" className="img1">
                <p>Wedding</p>
              </a>
              <a href="" className="img2">
                <p>Thanksgiving</p>
              </a>
              <a href="" className="img3">
                <p>Valentines</p>
              </a>
              <a href="" className="img4">
                <p>Sympathy</p>
              </a>
              <a href="" className="img5">
                <p>Bundled</p>
              </a>
              <a href="/Cart.jsx" className="img6">
                <p>Regular</p>
              </a>
              <a href="" className="img7">
                <p>Party</p>
              </a>
              <a href="" className="img8">
                <p>Add-ons</p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Products;
