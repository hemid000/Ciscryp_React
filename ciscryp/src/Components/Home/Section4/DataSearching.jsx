import React, { useState } from "react";
import "../Section4/Searching.scss";

import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { AiOutlineSearch } from "react-icons/ai";
import Form from "react-bootstrap/Form";
import AppMock from "../../Mock/AppMock";
const DataSearching = () => {
  const [toggle, setToggle] = useState(true);

  const [search, setSearch] = useState("");
  console.log(search);
  const filter = (e) => {
    setSearch(e.target.value);
  };
  return (
    <section id="cart_filtering">
      <div className="container">
        <h3>Featured NFTs</h3>
        <p>Discover the most outstanding NFTs in all topics of life.</p>
      </div>

      <div className="container align-items-center">
        <div className="row">
          <div className="col-lg-6">
            <ul>
              <li className="active">All NFTs</li>
              <li>Arts</li>
              <li>Musics</li>
              <li>Sports</li>
              <li>Photography</li>
            </ul>
          </div>
          <div className="col-lg-6 right_cart_side">
            <InputGroup className="mb-3">
              <Form.Control
                onChange={filter}
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Search item"
              />
              <Button variant="outline-secondary" id="button-addon1">
                <AiOutlineSearch />
              </Button>
            </InputGroup>
            <p onClick={() => setToggle(!toggle)}>Filter</p>
          </div>
        </div>
      </div>
      {toggle && (
        <div className="container">
          <div className="list">
            <ul>
              <li>0.01 ETH - 10 ETH</li>
              <li>Sale Types</li>
              <li>File Types</li>
              <li>Sort order</li>
              <li>Verified creator</li>
            </ul>
          </div>
        </div>
      )}
      <div className="container mt-5">
        <div className="row g-3">
          {AppMock &&
            AppMock.filter((el) => {
              return search.toLocaleLowerCase() === ""
                ? el
                : el.headline.toLocaleLowerCase().includes(search);
            }).map((el) => {
              return (
                <div className="col-lg-3" key={el.id}>
                  <div className="sec3_cart">
                    <div className="img">
                      <img src={el.imgSrc} alt="" />
                    </div>
                    <div className="middle_cart">
                      <div className="inner_left_cart">
                        <div className="inner_left_cart_text">
                          <p>{el.headline}</p>
                          <span>{el.headline2}</span>
                        </div>
                        <a href="#">Follow</a>
                      </div>
                    </div>
                    <div className="last_side">
                      <p>{el.dscrb}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="container text-center btn-preloader">
        <button>
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          Show me more
        </button>
      </div>
    </section>
  );
};

export default DataSearching;
