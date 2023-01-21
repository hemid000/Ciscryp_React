import React from "react";
import "../Section5/Premium.scss";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { AiOutlineArrowRight } from "react-icons/ai";
const PremiumLogin = () => {
  return (
    <section id="PremiumLogin">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <h3>Never miss a drop!</h3>
            <p>
              Subcribe to our super-exclusive drop list and be the first to know
              abour upcoming drops
            </p>
            <ul>
              <li>
                <div className="circle">1</div>
                Get more discount
              </li>

              <li>
                <div className="circle">2</div>
                Get premium magazines
              </li>
            </ul>
            <InputGroup className="mb-3">
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Enter your email"
              />
              <Button variant="outline-secondary" id="button-addon1">
                <AiOutlineArrowRight />
              </Button>
            </InputGroup>
          </div>
          <div className="col-lg-7">
            <div className="img">
              <img
                src="https://chisnghiax.com/ciscryp/static/media/SVG-subcribe2.efb832b25bd6eca32484.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumLogin;
