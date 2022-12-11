import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsFacebook, BsLinkedin } from "react-icons/bs";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-5">
              <div className="footer-top-data d-flex align-items-center gap-3">
                <img src="images/newsletter.png" alt="newsletter" />
                <h3 className="mb-0 text-white">Sign Up for Newsletter</h3>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email Here"
                  aria-label="Your Email Here"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h6 className="mb-0 text-white">Contact Us</h6>
              <div className="footer-links d-flex flex-column mt-3">
                <address className="text-white-50 fs-8">
                  4296 Horner Street <br /> Cuyahoga Falls, OH 44221.
                </address>
                <a
                  href="tel: +95 9765080585"
                  className="text-white-50 mb-2 fs-8"
                >
                  +95 9765080585
                </a>
                <a
                  href="mailto:paingpyaethu@gmail.com"
                  className="text-white-50 fs-8"
                >
                  paingpyaethu@gmail.com
                </a>
                <div className="social-icons d-flex gap-3 mt-3">
                  <a href="https://github.com/ppt" className="text-white">
                    <BsGithub />
                  </a>
                  <a href="https://github.com/ppt" className="text-white">
                    <BsFacebook />
                  </a>
                  <a href="https://github.com/ppt" className="text-white">
                    <BsLinkedin />
                  </a>
                </div>
              </div>
              <div></div>
            </div>
            <div className="col-3">
              <h6 className="mb-0 text-white">Information</h6>
              <div className="footer-links d-flex flex-column mt-3">
                <Link className="text-white-50 mb-2 fs-8">Privacy Policy</Link>
                <Link className="text-white-50 mb-2 fs-8">Refund Policy</Link>
                <Link className="text-white-50 mb-2 fs-8">Shipping Policy</Link>
                <Link className="text-white-50 mb-2 fs-8">
                  Terms & Condition
                </Link>
                <Link className="text-white-50 mb-2 fs-8">Blogs</Link>
              </div>
              <div></div>
            </div>
            <div className="col-3">
              <h6 className="mb-0 text-white">Account</h6>
              <div className="footer-links d-flex flex-column mt-3">
                <Link className="text-white-50 mb-2 fs-8">About Us</Link>
                <Link className="text-white-50 mb-2 fs-8">Faq</Link>
                <Link className="text-white-50 mb-2 fs-8">Contact</Link>
              </div>
              <div></div>
            </div>
            <div className="col-2">
              <h6 className="mb-0 text-white">Quick Links</h6>
              <div className="footer-links d-flex flex-column mt-3">
                <Link className="text-white-50 mb-2 fs-8">Laptops</Link>
                <Link className="text-white-50 mb-2 fs-8">Headphones</Link>
                <Link className="text-white-50 mb-2 fs-8">Tablets</Link>
                <Link className="text-white-50 mb-2 fs-8">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center text-white fs-8">
                &copy; {new Date().getFullYear()} - Power by Paing Pyae Thu
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
