/* eslint-disable @next/next/no-img-element */
import React from "react";
import ServiceForm from "./ServiceForm";

const SingleServiceRegister = () => {
  return (
    <section className="sign-up-in-section bg-dark ptb-120 position-relative overflow-hidden">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-5 col-lg-5 col-md-12 order-1 order-lg-0">
            <div className="testimonial-tab-slider-wrap mt-5 mt-lg-0 mt-xl-0">
              <h2 className="text-white">Schedule Demo</h2>
              <p>
                Ready to experience the magic of capturing your special day in a
                whole new way? Look no further!
              </p>
              <hr />
              <div
                className="tab-content testimonial-tab-content text-white-80"
                id="pills-tabContent"
              >
                <div
                  className="tab-pane fade show active"
                  id="testimonial-tab-1"
                  role="tabpanel"
                >
                  <blockquote className="blockquote">
                    <em>
                      Our Virtual Reality Wedding Coverage offers a truly
                      immersive experience that will take your memories to the
                      next level. From the small laughs to the big moments,
                      everything will be captured in 360 degrees for you to
                      relive time and time again. We invite you to join us for a
                      demo to see just how incredible this technology truly is.
                      So why wait? Schedule your demo today and get ready to
                      experience your wedding in a whole new light!"
                    </em>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
          <ServiceForm />
        </div>
        {/* <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light left-5"></div>
        <div className="bg-circle rounded-circle circle-shape-1 position-absolute bg-warning right-5"></div> */}
      </div>
    </section>
  );
};

export default SingleServiceRegister;
