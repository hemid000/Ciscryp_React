import "../Navbar/Nav.scss";
import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import Darkmode from "../../Darkmode/Darkmode";
const Navbar = () => {
  return (
    <nav id="nav">
      <div className="container pt-3">
        <div className="row">
          <div className="col-5">
            <div className="left_Side">
              <img
                id="home_img"
                src="https://chisnghiax.com/ciscryp/static/media/logo.25debea968a8cdc57717f9110ced774d.svg"
                alt=""
              />

              <InputGroup className="mb-3">
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Search item"
                />
                <Button variant="outline-secondary" id="button-addon1">
                  <AiOutlineSearch />
                </Button>
              </InputGroup>
            </div>
          </div>
          <div className="col-7">
            <div className="right_side">
              <ul>
                <li id="discover">
                  Discover <AiOutlineDown />
                </li>
                <li>Help center</li>
              </ul>
              <Darkmode />
              <ul id="create">
                <li>Create</li>
              </ul>
              <img
                src="https://chisnghiax.com/ciscryp/static/media/Image-8.5ae85a64aab1965e33a5.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
