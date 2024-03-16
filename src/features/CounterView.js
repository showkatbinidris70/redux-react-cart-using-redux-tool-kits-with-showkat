import React from "react";
import VagetableImg from "../../src/assets/images/fresh-vegetables.webp";
import ShoppingCartImg from "../../src/assets/images/shopping_cart.png";
import redTomatoImg from "../../src/assets/images/red-tomato.webp";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { GiTireIronCross } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";

export default function CounterView() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="container">
        <div className="row py-5">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 w-100 h-100">
              <img src={VagetableImg} className="img-fluid" />
              <div className="card-body">
                <div className="card-title text-center fs-5">
                  Fresh Vegetables
                </div>
                <div className="quantity text-center fw-bold">500g</div>
                <div className="amount  text-center fw-bold">$20</div>
                <div className="bg-light p-2 rounded my-1">
                  <div className="d-flex gap-1 justify-content-around align-items-center">
                    <button
                      className="fs-3 px-3 border-0"
                      style={{
                        cursor: "pointer",
                        backgroundColor: "#ddd",
                      }}
                      onClick={() => {
                        dispatch(decrement());
                      }}
                    >
                      -
                    </button>
                    <div
                      className="text-nowrap"
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        dispatch(decrement());
                      }}
                    >
                      {count} Add to bag
                    </div>
                    <button
                      className="fs-3 px-3 border-0"
                      style={{
                        cursor: "pointer",
                        backgroundColor: "#ddd",
                      }}
                      onClick={() => {
                        dispatch(increment());
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 w-100 h-100">
              <img src={VagetableImg} className="img-fluid" />
              <div className="card-body">
                <div className="card-title text-center fs-5">
                  Fresh Vegetables
                </div>
                <div className="quantity text-center fw-bold">500g</div>
                <div className="amount  text-center fw-bold">$20</div>
                <div className="bg-light p-2 rounded my-1">
                  <div className="d-flex gap-1 justify-content-around align-items-center">
                    <button
                      className="fs-3 px-3 border-0"
                      style={{
                        cursor: "pointer",
                        backgroundColor: "#ddd",
                      }}
                      onClick={() => {
                        dispatch(decrement());
                      }}
                    >
                      -
                    </button>
                    <div
                      className="text-nowrap"
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        dispatch(decrement());
                      }}
                    >
                      {count} Add to bag
                    </div>
                    <button
                      className="fs-3 px-3 border-0"
                      style={{
                        cursor: "pointer",
                        backgroundColor: "#ddd",
                      }}
                      onClick={() => {
                        dispatch(increment());
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 w-100 h-100">
              <img src={VagetableImg} className="img-fluid" />
              <div className="card-body">
                <div className="card-title text-center fs-5">
                  Fresh Vegetables
                </div>
                <div className="quantity text-center fw-bold">500g</div>
                <div className="amount  text-center fw-bold">$20</div>
                <div className="bg-light p-2 rounded my-1">
                  <div className="d-flex gap-1 justify-content-around align-items-center">
                    <button
                      className="fs-3 px-3 border-0"
                      style={{
                        cursor: "pointer",
                        backgroundColor: "#ddd",
                      }}
                      onClick={() => {
                        dispatch(decrement());
                      }}
                    >
                      -
                    </button>
                    <div
                      className="text-nowrap"
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        dispatch(decrement());
                      }}
                    >
                      {count} Add to bag
                    </div>
                    <button
                      className="fs-3 px-3 border-0"
                      style={{
                        cursor: "pointer",
                        backgroundColor: "#ddd",
                      }}
                      onClick={() => {
                        dispatch(increment());
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 w-100 h-100">
              <img src={VagetableImg} className="img-fluid" />
              <div className="card-body">
                <div className="card-title text-center fs-5">
                  Fresh Vegetables
                </div>
                <div className="quantity text-center fw-bold">500g</div>
                <div className="amount  text-center fw-bold">$20</div>
                <div className="bg-light p-2 rounded my-1">
                  <div className="d-flex gap-1 justify-content-around align-items-center">
                    <button
                      className="fs-3 px-3 border-0"
                      style={{
                        cursor: "pointer",
                        backgroundColor: "#ddd",
                      }}
                      onClick={() => {
                        dispatch(decrement());
                      }}
                    >
                      -
                    </button>
                    <div
                      className="text-nowrap"
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        dispatch(decrement());
                      }}
                    >
                      {count} Add to bag
                    </div>
                    <button
                      className="fs-3 px-3 border-0"
                      style={{
                        cursor: "pointer",
                        backgroundColor: "#ddd",
                      }}
                      onClick={() => {
                        dispatch(increment());
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <div className="show-items">
          <div>
            <div className=" d-flex justify-content-center">
              <img src={ShoppingCartImg} className="img-fluid" />
            </div>
            <p className="text-center p-0 m-0 text-white">{count} item</p>
            <p className="text-center p-0 m-0 text-warning bg-secondary mt-1">
              $500
            </p>
          </div>
        </div>
      </div>
      <>
        {/* right off canvas */}
        <div
          className="offcanvas offcanvas-end position-fixed"
          tabIndex={-1}
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
          style={{ backgroundColor: "#dddddd" }}
        >
          <div className="offcanvas-header">
            <h5 id="offcanvasRightLabel">{count} item</h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <div className="border-bottom border-secondary p-2">
              <div className="d-flex gap-2 justify-content-between align-items-center">
                <div style={{ height: "70px" }}>
                  <div
                    onClick={() => {
                      dispatch(increment());
                    }}
                  >
                    <IoIosArrowUp />
                  </div>
                  <div>{count}</div>
                  <div
                    onClick={() => {
                      dispatch(decrement());
                    }}
                  >
                    <IoIosArrowDown />
                  </div>
                </div>

                <div>
                  <img
                    src={VagetableImg}
                    className="img-fluid"
                    style={{ height: "40px", width: "25px" }}
                  />
                </div>
                <div>
                  <div style={{ fontSize: "12px" }}>Red Tomato</div>
                  <div style={{ fontSize: "10px" }}>:500gm</div>
                </div>
                <div>
                  <p className="p0 m-0" style={{ fontSize: "12px" }}>
                    $12
                  </p>
                  <p
                    className="p0 m-0 text-decoration-line-through"
                    style={{ fontSize: "12px" }}
                  >
                    $15
                  </p>
                </div>
                <div>
                  <GiTireIronCross />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
