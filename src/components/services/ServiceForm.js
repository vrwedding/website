import React from "react";

const ServiceForm = () => {
  return (
    <>
      <div className="col-xl-5 col-lg-7 col-md-12 order-0 order-lg-1">
        <div className="register-wrap p-5 bg-white shadow rounded-custom">
          <h3 className="fw-medium">
            Fill out the form and we will be in touch as soon.{" "}
          </h3>

          <form action="#" className="mt-4 register-form">
            <div className="row">
              <div className="col-sm-6">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    aria-label="name"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mobile Number"
                    aria-label="mobile-number"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    aria-label="email"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-group mb-3">
                  <select
                    className="form-control form-select"
                    name="Wedding Status"
                    id="wedding"
                    required=""
                    data-msg="Please select your country."
                  >
                    <option
                      value="Jan"
                      aria-selected
                      style={{ display: "none" }}
                    >
                      How did you hear?
                    </option>
                    <option value="Feb">Friends</option>
                    <option value="Mar">Google</option>
                    <option value="Mar">Linkedin</option>
                    <option value="Apr">Other</option>
                  </select>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="input-group mb-3">
                  <select
                    className="form-control form-select"
                    name="Wedding Status"
                    id="wedding"
                    required=""
                    data-msg="Please select your country."
                  >
                    <option value="Yay Engaged!">Yay Engaged!</option>
                    <option value="Dates Locked">Dates Locked</option>
                    <option value="Planning Wedding">Planning Wedding</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-group mb-3">
                  <select
                    className="form-control form-select"
                    name="Month of Wedding"
                    id="month"
                    required=""
                    data-msg="Please select tentative month."
                  >
                    <option value="Jan">January</option>
                    <option value="Feb">Feburary</option>
                    <option value="Mar">March</option>
                    <option value="Apr">April</option>
                    <option value="May">May</option>
                    <option value="Jun">June</option>
                    <option value="Jul">July</option>
                    <option value="Aug">August</option>
                    <option value="Sep">September</option>
                    <option value="Oct">October</option>
                    <option value="Nov">November</option>
                    <option value="Dec">December</option>
                  </select>
                </div>
              </div>

              <div className="col-sm-12">
                <div className="input-group mb-3">
                  <select
                    className="form-control form-select"
                    name="budget"
                    id="budget"
                    required=""
                    data-msg="Please select your budget."
                  >
                    <option value="" disabled="">
                      Budget for Videography/Photography
                    </option>
                    <option value="budget1">None, just getting started</option>
                    <option value="budget1">Less than 50,000</option>
                    <option value="budget1">50,000 to 1,00,000</option>
                    <option value="budget1">1,00,000 to 2,00,000</option>
                    <option value="budget2">More than 2,00,000</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-group mb-3">
                  <select
                    className="form-control form-select"
                    name="country"
                    id="country"
                    required=""
                    data-msg="Please select your country."
                  >
                    <option value="" disabled="">
                      Country
                    </option>
                    <option value="India">India</option>
                    <option value="Dubai">Dubai</option>
                    <option value="US">UAE</option>
                    <option value="UK">United Kingdom</option>
                    <option value="US">United States</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Thailand">Other</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="City"
                    aria-label="Cirt"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="input-group mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Tell us something about your wedding"
                    style={{ height: "120px" }}
                  ></textarea>
                </div>
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label small"
                    htmlFor="flexCheckChecked"
                  >
                    Yes, I'd like the VR Wedding Team for Demo about a demo.
                  </label>
                </div>
              </div>
              <div className="col-12">
                <button
                  type="button"
                  className="btn btn-primary mt-4 d-block w-100"
                >
                  Get Started
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ServiceForm;
