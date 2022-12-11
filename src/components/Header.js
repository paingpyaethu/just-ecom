import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import {
  IoInfiniteOutline,
  IoPersonOutline,
  IoHeartOutline,
  IoCartOutline,
  IoKeypadOutline,
} from "react-icons/io5";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6 overflow-hidden">
              <span className="welcome-text text-white mb-0">
                Welcome to our shop... You can find anything in here as your
                favourites..
              </span>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:{" "}
                <a href="tel: +95 9765080585" className="text-white">
                  +95 9765080585
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h3>
                <Link className="text-white">Just Ecom</Link>
              </h3>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className="text-white d-flex align-items-center gap-2">
                    <IoInfiniteOutline className="fs-2" />
                    <p className="fs-8">
                      Compare <br /> Product
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="text-white d-flex align-items-center gap-2">
                    <IoHeartOutline className="fs-2" />

                    <p className="fs-8">
                      Favorite <br /> wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="text-white d-flex align-items-center gap-2">
                    <IoPersonOutline className="fs-2" />

                    <p className="fs-8">
                      Log in <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="text-white d-flex align-items-center gap-2">
                    <IoCartOutline className="fs-2" />
                    <div>
                      <span className="badge rounded-pill bg-light text-dark">
                        0
                      </span>
                      <p className="fs-8">$500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span>
                        <IoKeypadOutline className="fs-5 me-1" />
                      </span>
                      Shop Categories
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item" to="#">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center">
                    <NavLink>Home</NavLink>
                    <NavLink>Our Store</NavLink>
                    <NavLink>Blogs</NavLink>
                    <NavLink>Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
