import Link from "next/link";
import { FaRegCheckCircle } from "react-icons/fa";
import React, { useState } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import ModalVideo from "react-modal-video";

const SupportOne = ({ className }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section
      className={`${
        className
          ? "cta-subscribe bg-dark ptb-120 position-relative overflow-hidden"
          : "cta-subscribe pt-60 pb-120"
      }`}
    >
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="hAP2QF--2Dg"
        onClose={() => setOpen(false)}
      />
      <div className="container">
        <div
          className={`${
            className
              ? ""
              : "bg-gradient ptb-120 px-4 position-relative overflow-hidden rounded-custom"
          }`}
        >
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-8">
              <div className="subscribe-info-wrap text-center position-relative z-2">
                <div className="section-heading">
                  <h4 className="h5 text-warning">
                    Talk with us to schedule demo
                  </h4>
                  <h2>VR Wedding is future!</h2>
                  <p>
                    Make your special day even more unforgettable with virtual
                    reality wedding services.
                  </p>
                </div>
                <div className="form-block-banner mw-60 m-auto mt-5">
                  <Link href="/contact-us">
                    <a className="btn btn-primary">Talk with Us</a>
                  </Link>
                  <a
                    href="https://www.youtube.com/watch?v=9jsCOGEV8mg"
                    onClick={() => setOpen(true)}
                    className="text-white text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn ms-lg-3 ms-md-3 mt-3 mt-lg-0"
                  >
                    <span>
                      <IoPlayCircleOutline className="me-1" />
                      Watch Demo
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light left-5"></div>
          <div className="bg-circle rounded-circle circle-shape-1 position-absolute bg-warning right-5"></div>
        </div>
      </div>
    </section>
  );
};

export default SupportOne;
