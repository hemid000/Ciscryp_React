import React from "react";
import "../Section1/Discover.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPen } from "react-icons/bs";
const Discover = () => {
  return (
    <section id="sec_discover">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 left_side">
            <span>
              Discover 🖼 <br />
              collect, and sell <br />
              extraordinary NFTs
            </span>

            <p>
              Discover the most outstanding NTFs in all topics of life. Creative
              your NTFs and sell them
            </p>
            <div className="sec1_click">
              <a href="#">
                Explore <AiOutlineSearch />
              </a>
              <a href="#">
                Create <BsPen />
              </a>
            </div>
          </div>
          <div className="col-lg-6 right_side">
            <img
              src="https://chisnghiax.com/ciscryp/static/media/about-hero-right.527e5abf19aca9c2985a.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
