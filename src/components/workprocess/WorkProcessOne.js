import React from "react";
import Image from "next/image";
import { FaBezierCurve } from "react-icons/fa";
import { RiNodeTree } from "react-icons/ri";
import { GrResources } from "react-icons/gr";

const WorkProcessOne = () => {
  return (
    <section className="work-process ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-heading text-center">
              <h2>Simple than Ordering Pizza</h2>
              <p>
                We want to reach corner of India, so we have initiated a
                referral programme. Make Passive income just by referring us.{" "}
                {""}
                <b>Minimum of 20,000 INR per introduction.</b>
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5 col-md-12 order-1 order-lg-0">
            <div className="img-wrap">
              <Image
                width={530}
                height={580}
                src="/affiliate.png"
                alt="work process"
                className="img-fluid rounded-custom"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 order-0 order-lg-1">
            <ul className="work-process-list list-unstyled">
              <li className="d-flex align-items-start mb-4">
                <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                  <i className="far fa-2x">
                    <RiNodeTree />
                  </i>
                </div>
                <div className="icon-content">
                  <h3 className="h5 mb-2">Register as Affiliate with Us</h3>
                  <p>
                    Express your interest with us and we onboard you to our
                    refferal network. Once registered, you just have to spread
                    word.
                  </p>
                </div>
              </li>
              <li className="d-flex align-items-start mb-4">
                <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                  <i className="far fa-3x">
                    {" "}
                    <FaBezierCurve />
                  </i>
                </div>
                <div className="icon-content">
                  <h3 className="h5 mb-2">Introduce Us</h3>
                  <p>
                    Tell your friends, family, Ex or loved once who is gettings
                    married. They schedule demo with us for VR Weddings
                    Offerings.
                  </p>
                </div>
              </li>
              <li className="d-flex align-items-start mb-4">
                <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                  <i className="far fa-2x">
                    <GrResources />
                  </i>
                </div>
                <div className="icon-content">
                  <h3 className="h5 mb-2">Wedding Coverage</h3>
                  <p>
                    We cover wedding in Virtual Reality and you earn minimum of
                    20,000 INR for introduction. You earning is unlimited.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessOne;
