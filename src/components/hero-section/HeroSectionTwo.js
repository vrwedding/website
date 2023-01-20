import React from "react";
import Link from "next/link";

const HeroSectionTwo = () => {
  return (
    <section
      className="about-header-section ptb-120 position-relative overflow-hidden bg-dark"
      style={{
        background: "url('/page-header-bg.svg')no-repeat center right",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading-wrap d-flex justify-content-between z-5 position-relative">
              <div className="about-content-left">
                <div className="about-info mb-5">
                  <h1 className="fw-bold display-5">We are trend setter</h1>
                  <p className="lead">
                    In 2016, we captured India's first wedding in 360 degree
                    video, and we have advanced significantly since then. We
                    train people in VR weddings and we grow together.{" "}
                  </p>
                  <Link href="/request-demo">
                    <a className="btn btn-primary me-3"> Request Demo</a>
                  </Link>
                  <Link href="/contact-us">
                    <a className="btn btn-outline-primary">Traning</a>
                  </Link>
                </div>
                <img
                  src="/about-img-1.jpg"
                  alt="about"
                  className="img-fluid about-img-first mt-5 rounded-custom shadow"
                />
              </div>
              <div className="about-content-right">
                <img
                  src="/about-img-2.jpg"
                  alt="about"
                  className="img-fluid mb-5 rounded-custom shadow"
                />
                <img
                  src="/about-img-3.jpg"
                  alt="about"
                  className="rounded-custom about-img-last shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white position-absolute bottom-0 h-25 bottom-0 left-0 right-0 z-2 py-5"></div>
    </section>
  );
};

export default HeroSectionTwo;
