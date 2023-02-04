/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const ReviewOne = () => {
  return (
    <section className="customer-review pb-120 bg-dark">
      <div className="container">
        <div className="row">
          <div className="section-heading text-center" data-aos="fade-up">
            <h2 className="fw-medium h4">
              We have come a long way with technology
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div
              className="review-info-wrap text-center rounded-custom d-flex flex-column h-100 p-lg-5 p-4"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <img
                src="/photography.png"
                width="220"
                alt="facebook"
                className="img-fluid m-auto"
              />
              <div className="review-info-content mt-2">
                <p className="mb-4">
                  In the 1840s, photography made its debut as a tool to
                  immortalize the timeless memories of weddings. With each
                  flash, the art of capturing life's most precious moments was
                  born, forever changing the way we preserve and relive our
                  memories.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div
              className="review-info-wrap text-center rounded-custom d-flex flex-column h-100 p-lg-5 p-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src="/videography.png"
                width="220"
                alt="google"
                className="img-fluid m-auto"
              />
              <div className="review-info-content mt-2">
                <p className="mb-4">
                  Took art of creating memories to soaring new heights by
                  providing the ability to capture every moment in front of the
                  lens. A window into the past, a visual diary of the moments
                  that matter most, and a legacy to pass down to future
                  generations.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div
              className="review-info-wrap  text-center rounded-custom d-flex flex-column h-100 p-lg-5 p-4"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <img
                src="/virtual-reality.png"
                width="220"
                alt="linkedIn"
                className="img-fluid m-auto"
              />
              <div className="review-info-content mt-2">
                <p className="mb-4">
                  Takes memory preservation to a whole new dimension by allowing
                  you to capture every moment in stunning 360 degrees. Imagine
                  being transported back to your special day, surrounded by the
                  sights and sounds of that unforgettable moment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewOne;
