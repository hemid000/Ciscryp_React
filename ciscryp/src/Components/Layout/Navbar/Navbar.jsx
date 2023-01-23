import "../Navbar/Nav.scss";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineDown, AiOutlineMenu } from "react-icons/ai";
import Darkmode from "../../Darkmode/Darkmode";
import Offcanvas from "react-bootstrap/Offcanvas";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <nav id="nav">
      <div className="nav_1">
        <div className="container pt-3">
          <div className="row">
            <div className="col-5">
              <div className="left_Side">
                <img
                  id="home_img"
                  src="https://chisnghiax.com/ciscryp/static/media/logo.25debea968a8cdc57717f9110ced774d.svg"
                  alt=""
                />
                <img
                  id="dark-mode-img"
                  src="https://chisnghiax.com/ciscryp/static/media/logo-light.efd6c8c15ce9ff0f90cc7add4d464ab1.svg"
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
      </div>

      <div className="nav_mobile">
        <div className="container pt-3">
          <div className="row">
            <div className="col-8">
              <div className="left_Side">
                <img
                  id="home_img"
                  src="https://chisnghiax.com/ciscryp/static/media/logo.25debea968a8cdc57717f9110ced774d.svg"
                  alt=""
                />
                <img
                  id="dark-mode-img"
                  src="https://chisnghiax.com/ciscryp/static/media/logo-light.efd6c8c15ce9ff0f90cc7add4d464ab1.svg"
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
            <div className="col-4">
              <div className="right_side">
                <ul id="create">
                  <li>Create</li>
                  <AiOutlineMenu
                    variant="primary"
                    onClick={handleShow}
                    style={{ fontSize: "22px", cursor: "pointer" }}
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              {" "}
              <img
                id="home_img"
                src="https://chisnghiax.com/ciscryp/static/media/logo.25debea968a8cdc57717f9110ced774d.svg"
                alt=""
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="body_canvas">
              {" "}
              <div className="upside">
                <span>
                  Discover the most outstanding articles on all topics of life.
                  Write your stories and share them
                </span>
              </div>
              <Darkmode />
              <ul>
                <li>
                  DISCOVER <AiOutlineDown />
                </li>
                <li>HELP CENTER</li>
              </ul>
              <a id="create" href="#">
                Create
              </a>
              <a id="connect" href="#">
                Connect
              </a>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </nav>
  );
};

export default Navbar;
