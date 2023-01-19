import React from "react";
import "../Section2/Countdown_timer.scss";
import { TiTickOutline } from "react-icons/ti";
import { MdOutlineTimer } from "react-icons/md";
const countdown_timer = () => {
  return (
    <section id="timer_cart">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 left_side">
            <div className="cart-time">
              <h3>Amazing Nature</h3>
              <div className="middle_side">
                <div className="inner_left_cart">
                  <img
                    src="https://chisnghiax.com/ciscryp/static/media/Image-5.b1088376a574bcedc983.png"
                    alt=""
                  />
                  <div className="inner_left_cart_text">
                    <span>Creator</span>
                    <p>
                      Jane Cooper{" "}
                      <TiTickOutline
                        style={{ color: "blue", margin: "0 5px" }}
                      />
                    </p>
                  </div>
                </div>

                <div className="inner_right_cart">
                  <img
                    src="https://chisnghiax.com/ciscryp/static/media/collection.6624a7ff4b0f48fc6e24.png"
                    alt=""
                  />
                  <div className="inner_left_cart_text">
                    <span>Collection</span>
                    <p>Marscapes </p>
                  </div>
                </div>
              </div>

              <div className="sec1_form">
                <div className="current_value">
                  <span>1.000 ETH</span>
                  <span>(≈ $3,221.22)</span>
                </div>
              </div>

              <p id="ending_time">
                <MdOutlineTimer style={{ margin: "0 10px 0 0" }} /> Auction
                ending in:
              </p>
              <div className="time-field">
                <div className="time">
                  <p>21</p>
                  <span>Days</span>
                </div>
                <div className="time">
                  <p>4</p>
                  <span>hours</span>
                </div>
                <div className="time">
                  <p>67</p>
                  <span>mins</span>
                </div>
                <div className="time">
                  <p>21</p>
                  <span>secs</span>
                </div>
              </div>

              <div className="sec2_click">
                <a href="#">Place a bid</a>
                <a href="#">View item</a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 right_side">
            <img
              src="https://chisnghiax.com/ciscryp/static/media/large1.501744b97da258c84cca.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default countdown_timer;
