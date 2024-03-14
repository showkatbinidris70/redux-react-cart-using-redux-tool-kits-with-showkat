import React from "react";
import VagetableImg from "../../src/assets/images/fresh-vegetables.webp";
import ShoppingCartImg from "../../src/assets/images/shopping_cart.png";

export default function CartView() {
  return (
    <div>
      <div className="container">
        <div className="row py-5">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1">
              <img src={VagetableImg} className="img-fluid" />
              <div className="card-body">
                <div className="card-title text-center fs-5">
                  Fresh Vegetables
                </div>
                <div className="quantity text-center fw-bold">500g</div>
                <div className="amount  text-center fw-bold">$20</div>
                <div className="bg-light p-2 rounded my-1">
                  <div className="d-flex gap-1 justify-content-around">
                    <div>-</div>
                    <div>Add to bag</div>
                    <div>+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">11</div>
          <div className="col-sm-6 col-md-4 col-lg-3">11</div>
          <div className="col-sm-6 col-md-4 col-lg-3">11</div>
        </div>
      </div>
      <div className="show-items">
        <div className=" d-flex justify-content-center">
          <img src={ShoppingCartImg} className="img-fluid" />
        </div>
        <p className="text-center p-0 m-0 text-white">0 item</p>
        <p className="text-center p-0 m-0 text-warning bg-secondary mt-1">$500</p>
      </div>
    </div>
  );
}
