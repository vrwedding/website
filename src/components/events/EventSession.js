import React from "react";
import Link from "next/link";
import { FiArrowRight, FiMapPin, FiClock } from "react-icons/fi";

export default function EventSession() {
  return (
    <section>
      <div className="container">
        <div className="ev-schedule mt--50 ptb-100 rounded-top">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="text-center ev-schedule-btn mb-5">
                <span className="text-pink fw-bold">
                  27th & 28th Feburary, 2023
                </span>
                <h2 className="mb-4">VR Wedding Workshop</h2>
                <h5 className="mb-4">
                  Includes are the workshop, lodging, meals, and beer.
                </h5>
                <ul
                  className="nav list-unstyled d-flex justify-content-center"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item mb-3 mb-lg-0" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-day1-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-day1"
                      type="button"
                      role="tab"
                      aria-controls="pills-day1"
                      aria-selected="true"
                    >
                      Day-1
                    </button>
                  </li>
                  <li className="nav-item mb-3 mb-lg-0" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-day2-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-day2"
                      type="button"
                      role="tab"
                      aria-controls="pills-day2"
                      aria-selected="false"
                    >
                      Day-2
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-day1"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div className="single-eve-session py-5 rounded px-4 px-lg-0 mb-4">
                    <div className="row align-items-center">
                      <div className="col-lg-3">
                        <div className="text-lg-center speaker-info mb-3 mb-lg-0 py-3 md-py-0">
                          <img
                            src="/event/sp-1.png"
                            alt="speaker"
                            className="mb-3"
                          />
                          <h5 className="h6 m-0">Gaurav Mehta</h5>
                          <span className="small">Techology Expert</span>
                        </div>
                      </div>
                      <div className="col-lg-9">
                        <div className="single-ev px-lg-4">
                          <h5 className="mb-3 h6">
                            {" "}
                            Know VR Industry & Participants over Brunch{" "}
                          </h5>
                          <p className="mb-3">
                            Over brunch, get to know your fellow workshop
                            attendees. Hear from an industry expert on Virtual
                            Reality innovation, growth, commercial
                            opportunities, and newest advances. Learn how you
                            may benefit from the Virtual Reality breakthrough in
                            cinematography, weddings, filmmaking, and other
                            opportunities.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-eve-session py-5 rounded px-4 px-lg-0 mb-4">
                    <div className="row align-items-center">
                      <div className="col-lg-3">
                        <div className="text-lg-center speaker-info mb-3 mb-lg-0 py-3 md-py-0">
                          <img
                            src="/event/sp-3.png"
                            alt="speaker"
                            className="mb-3"
                          />
                          <h5 className="h6 m-0">Akshay Mehta</h5>
                          <span className="small">VR Wedding Expert</span>
                        </div>
                      </div>
                      <div className="col-lg-9">
                        <div className="single-ev px-lg-4">
                          <h5 className="mb-3 h6">
                            Virtual Reality Wedding Demo
                          </h5>
                          <p className="mb-3">
                            Understand how virtual reality works in wedding
                            industry, value proposition and approach to start
                            offering services. Learn how to handle virtual
                            reality technology and camera with hands on
                            training.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-day2"
                  role="tabpanel"
                  aria-labelledby="pills-day2-tab"
                >
                  <div className="single-eve-session py-5 rounded px-4 px-lg-0 mb-4">
                    <div className="row align-items-center">
                      <div className="col-lg-3">
                        <div className="text-lg-center speaker-info mb-3 mb-lg-0 py-3 md-py-0">
                          <img
                            src="/event/sp-1.png"
                            alt="speaker"
                            className="mb-3"
                          />
                          <h5 className="h6 m-0">Gaurav Mehta</h5>
                          <span className="small">Technology Expert</span>
                        </div>
                      </div>
                      <div className="col-lg-9">
                        <div className="single-ev px-lg-4">
                          <h5 className="mb-3 h6">
                            Acquiring Clients & Marketing Approach
                          </h5>
                          <p className="mb-3">
                            Authoritatively orchestrate performance based human
                            capital for high standards in materials.
                            Interactively fabricate timely ideas after premier
                            opportunitiesObjectively based human capital
                            implement.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-eve-session py-5 rounded px-4 px-lg-0 mb-4">
                    <div className="row align-items-center">
                      <div className="col-lg-3">
                        <div className="text-lg-center speaker-info mb-3 mb-lg-0 py-3 md-py-0">
                          <img
                            src="/event/sp-2.png"
                            alt="speaker"
                            className="mb-3"
                          />
                          <h5 className="h6 m-0">Akshay Mehta</h5>
                          <span className="small">VR Wedding Expert</span>
                        </div>
                      </div>
                      <div className="col-lg-9">
                        <div className="single-ev px-lg-4">
                          <h5 className="mb-3 h6">
                            Wedding Coverage Planning & Blueprint
                          </h5>
                          <p className="mb-3">
                            Authoritatively orchestrate performance based human
                            capital for high standards in materials.
                            Interactively fabricate timely ideas after premier
                            opportunitiesObjectively based human capital
                            implement.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-eve-session py-5 rounded px-4 px-lg-0 mb-4">
                    <div className="row align-items-center">
                      <div className="col-lg-3">
                        <div className="text-lg-center speaker-info mb-3 mb-lg-0 py-3 md-py-0">
                          <img
                            src="/event/sp-3.png"
                            alt="speaker"
                            className="mb-3"
                          />
                          <h5 className="h6 m-0">Sven Diederich</h5>
                          <span className="small">Creative Director</span>
                        </div>
                      </div>
                      <div className="col-lg-9">
                        <div className="single-ev px-lg-4">
                          <h5 className="mb-3 h6">
                            Post Production Pipeline & Publishing
                          </h5>
                          <p className="mb-3">
                            Authoritatively orchestrate performance based human
                            capital for high standards in materials.
                            Interactively fabricate timely ideas after premier
                            opportunitiesObjectively based human capital
                            implement.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-3">
            <Link href="/request-demo">
              <a className="btn btn-primary bg-dark-blue"> Download Brochure</a>
            </Link>
          </div>
          <ul className="circel-shape list-unstyled d-none d-lg-block mb-0">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
