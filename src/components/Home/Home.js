import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src="images/banner/main-banner.jpg"
                alt="main-banner"
                className="img-fluid rounded-3"
              />
              <div className="main-banner-content position-absolute">
                <h4>Supercharged For Pros.</h4>
                <h5>Special Sale</h5>
                <p>From $1999.0 or $81.64/mo.</p>
                <Link className="button">Buy Now</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <div className="small-banner position-relative p-1">
                <img
                  src="images/banner/catbanner-01.jpg"
                  alt="cat-banner01"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Supercharged For Pros.</h4>
                  <h5>Special Sale</h5>
                  <p>
                    From $1999.0 <br /> or $81.64/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative p-1">
                <img
                  src="images/banner/catbanner-02.jpg"
                  alt="cat-banner02"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4>15% Off</h4>
                  <h5>Smartwatch 7</h5>
                  <p>
                    Shop the latest band <br /> styles and colors
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative p-1">
                <img
                  src="images/banner/catbanner-03.jpg"
                  alt="cat-banner03"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4>New Arrival</h4>
                  <h5>Buy IPad Air</h5>
                  <p>
                    From $599 <br /> or $49.91/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative p-1">
                <img
                  src="images/banner/catbanner-04.jpg"
                  alt="cat-banner04"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Free Engraving</h4>
                  <h5>AirPods Max</h5>
                  <p>
                    Hide-fidelity playback & <br />
                    ultra-low distortion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
