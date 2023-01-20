/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import HeroTitle from "../common/HeroTitle";

const HeroSectionFourth = ({ bgDark }) => {
  return (
    <section
      className={`hero-section ptb-120 ${bgDark ? "bg-dark" : "bg-white"}`}
      style={{
        background:
          "url('/shape/dot-dot-wave-shape.svg')no-repeat bottom center",
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-xl-5 col-lg-5">
            <div className="hero-content-wrap mt-5 text-center text-xl-start text-lg-start">
              <HeroTitle
                title="Simply make money by Introducing Us"
                desc="Your loved ones need to know about the amazing new trend of virtual reality wedding coverage "
              />
              <div className="hero-subscribe-form-wrap pt-4 position-relative m-auto m-xl-0 d-none d-md-block d-lg-block d-xl-block">
                <form
                  id="subscribe-form"
                  name="email-form"
                  className="hero-subscribe-form d-block d-lg-flex d-md-flex"
                >
                  <input
                    type="email"
                    className="form-control me-2"
                    name="Email"
                    data-name="Email"
                    placeholder="Enter mobile number"
                    id="email-address"
                    required=""
                  />
                  <input
                    type="button"
                    value="Make me Affiliate"
                    data-wait="Please wait..."
                    className="btn btn-primary mt-3 mt-lg-0 mt-md-0"
                  />
                </form>
                <ul className="nav subscribe-feature-list mt-3">
                  <li className="nav-item">
                    <span className="ms-0">
                      <FaRegCheckCircle className="far me-2 text-primary" />
                      Earn min 20,000 INR per intro
                    </span>
                  </li>
                  <li className="nav-item">
                    <span>
                      <FaRegCheckCircle className="far me-2 text-primary" />
                      No hidden conditions{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 mt-4 mt-xl-0"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionFourth;
