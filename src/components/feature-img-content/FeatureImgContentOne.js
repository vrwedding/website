import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const FeatureImgContentOne = () => {
  return (
    <>
      <section className="why-choose-us ptb-120">
        <div className="container">
          <div className="row justify-content-lg-between align-items-center">
            <div className="col-lg-5 col-12">
              <div className="why-choose-content">
                <h2>Make your wedding a beautiful memory</h2>
                <p>
                  Your wedding day is an unforgettable milestone, a
                  once-in-a-lifetime celebration that deserves to be captured in
                  all its glory. Traditional photography and videography may
                  capture some of the magic, but they only offer a limited
                  perspective. Thats why Virtual Reality is here to take your
                  wedding memories to new heights! Imagine experiencing the full
                  360-degree view of your special day, surrounded by the sights,
                  sounds, and emotions of each unforgettable moment.
                </p>
                <p>
                  With VR, every detail, every movement, and every feeling is
                  captured in stunning detail, inviting you to relive the
                  memories with vivid accuracy. Dont settle for a limited
                  perspective, choose Virtual Reality to preserve the most
                  cherished moments of your life in a way that will take your
                  breath away and leave you forever in awe.
                </p>
                <a
                  href="about-us.html"
                  className="read-more-link text-decoration-none"
                >
                  Know More Virtual Reality{" "}
                  <span className="far ms-2 mb-1">
                    <FiArrowRight />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="feature-img-holder mt-4 mt-lg-0 mt-xl-0">
                <Image
                  width={588}
                  height={400}
                  layout="responsive"
                  src="/screen/widget-wedding.png"
                  className="img-fluid"
                  alt="feature-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="image-feature pt-60 pb-120">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 col-12 order-lg-1">
              <div className="feature-img-content">
                <h2>How virtual reality works?</h2>
                <p>
                  Step into a world of endless memories with Virtual Reality!
                  Say goodbye to the limitations of traditional videography and
                  embrace a breathtaking 360-degree experience. With multiple
                  cameras capturing every moment from every angle, every giggle,
                  every hug, and every cherished memory is recorded in vivid
                  detail.
                </p>
                <p>
                  And the magic doesnt stop there! Our advanced VR technology
                  undergoes a rigorous post-production process to bring you the
                  ultimate VR wedding experience. So get ready to immerse
                  yourself in memories that will last a lifetime and relive your
                  special day over and over again in stunning Virtual Reality!
                </p>

                <a
                  href="about-us.html"
                  className="read-more-link text-decoration-none d-block mt-4"
                >
                  Know More About Us{" "}
                  <span className="far ms-2 mb-1">
                    <FiArrowRight />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-12 order-lg-0">
              <div className="feature-img-holder mt-4 mt-lg-0 mt-xl-0">
                <Image
                  width={588}
                  height={400}
                  layout="responsive"
                  src="/screen/widget-camera.png"
                  className="img-fluid"
                  alt="feature-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="why-choose-us ptb-120">
        <div className="container">
          <div className="row justify-content-lg-between align-items-center">
            <div className="col-lg-5 col-12">
              <div className="why-choose-content">
                <h2>You can relive your wedding anytime</h2>
                <p>
                  Revisit your special day anytime, anywhere with Virtual
                  Reality! With 360-degree video capturing every detail of your
                  wedding, simply slip on a VR headset and transport yourself
                  back in time.
                </p>
                <p>
                  No need to worry if you dont have a camera, as VR technology
                  is becoming more accessible every day, soon to be as
                  ubiquitous as mobile phones. And with platforms like Facebook,
                  YouTube, and more already supporting VR content, reliving your
                  cherished memories has never been easier!
                </p>
                <a
                  href="about-us.html"
                  className="read-more-link text-decoration-none"
                >
                  Know More Virtual Reality{" "}
                  <span className="far ms-2 mb-1">
                    <FiArrowRight />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="feature-img-holder mt-4 mt-lg-0 mt-xl-0">
                <Image
                  width={588}
                  height={400}
                  layout="responsive"
                  src="/screen/widget-team.png"
                  className="img-fluid"
                  alt="feature-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureImgContentOne;
