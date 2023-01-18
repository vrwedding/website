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
                <h2>Advanced Analytics, Understand Business</h2>
                <p>
                  Distinctively promote parallel vortals with ubiquitous
                  e-markets. Proactively benchmark turnkey optimize
                  next-generation strategic leadership without resource sucking
                  ideas.
                </p>
                <p>
                  Distinctively promote parallel vortals with ubiquitous
                  e-markets. Proactively benchmark turnkey optimize
                  next-generation strategic leadership without resource sucking
                  ideas.
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
                <h2>Match Everything to Brand and Style</h2>
                <p>
                  Intrinsicly pontificate reliable metrics with enabled.
                  Holisticly maintain clicks-and-mortar manufactured products
                  empower viral customer service through resource deliverables.
                </p>
                <p>
                  Customer service through resource pontificate reliable metrics
                  with enabled expedite resource maximizing information maintain
                  manufactured products.
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
                <h2>Advanced Analytics, Understand Business</h2>
                <p>
                  Distinctively promote parallel vortals with ubiquitous
                  e-markets. Proactively benchmark turnkey optimize
                  next-generation strategic leadership without resource sucking
                  ideas.
                </p>
                <p>
                  Distinctively promote parallel vortals with ubiquitous
                  e-markets. Proactively benchmark turnkey optimize
                  next-generation strategic leadership without resource sucking
                  ideas.
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
