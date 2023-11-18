import React, { useState } from "react";
import axios from "axios";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import AppConflig from "@components/hero-section/App.conflig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ServiceForm = () => {
  const [token, setToken] = useState(false);
  const success = () => toast("Email sent successfully.!", { theme: "dark" });
  const error = () => toast("Please fill tha Captcha.!", { theme: "dark" });
  const error1 = () =>
    toast("Failed to send email. Please try again later.!", { theme: "dark" });
  const handleSubmit = (event) => {
    const formData = new FormData(event.target);
    const fullName = formData.get("name");
    const MobileNumber = formData.get("mobile-number");
    const Email = formData.get("email");
    const WeddingStatus = formData.get("Wedding Status");
    const Purpose = formData.get("purpose");
    const MonthOfWedding = formData.get("Month of Wedding");
    const budget = formData.get("budget");
    const country = formData.get("country");
    const City = formData.get("Cirt");
    const userMessage = formData.get("Massage");

    event.preventDefault();
    if (token) {
      const data = {
        username: "AKIAVG3KVGIQ5K5C54EV",
        password: "BGI30r7ViaHz5pMhtMjkqw/GDeAD4S3McLoMJltIaaqF",
        server_addr: "email-smtp.eu-north-1.amazonaws.com",
        server_port: "587",
        destination_email: "shivdeep.catax@gmail.com",
        sender_email: "vrwedding@catax.me",
        subject: "VR Wedding Submission Form",
        body: `
    VR Wedding - Contact Form Submission
    Full Name: ${fullName}
    Email: ${Email}
    Mobile Number: ${MobileNumber}
    Country: ${country}
    Company: ${WeddingStatus}
    Purpose: ${Purpose}
    Month Of Wedding: ${MonthOfWedding}
    budget: ${budget}
    City: ${City}

    Message:
    ${userMessage}
`,
      };
      axios
        .post("https://emailsender.catax.me/sendEmail", data)
        .then((Response) => {
          console.log(Response);
          event.target.reset(); // Fix typo here
          success();
        })
        .catch((error) => {
          console.log("Error response data:", error.response.data);
          console.log("Error response status:", error.response.status);
          console.log("Error message:", error.message);
          console.log("Error response data:", error.response);

          error1();
        });
    } else {
      error();
    }
  };

  return (
    <>
      <div className="col-xl-5 col-lg-7 col-md-12 order-0 order-lg-1">
        <div className="register-wrap p-5 bg-white shadow rounded-custom">
          <h3 className="fw-medium">
            Fill out the form and we will be in touch as soon.{" "}
          </h3>

          <form
            action="#"
            className="mt-4 register-form"
            onSubmit={handleSubmit}
          >
            <div className="row">
              <div className="col-sm-6">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    aria-label="name"
                    name="name"
                    required
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
                    name="mobile-number"
                    required
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
                    name="email"
                    required
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
                    <option value="" aria-selected style={{ display: "none" }}>
                      How did you hear?
                    </option>
                    <option value="Friends">Friends</option>
                    <option value="Google">Google</option>
                    <option value="Linkedin">Linkedin</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="input-group mb-3">
                  <select
                    className="form-control form-select"
                    name="purpose"
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
                    <option value="None, just getting started">
                      None, just getting started
                    </option>
                    <option value="Less than 50,000">Less than 50,000</option>
                    <option value="50,000 to 1,00,000">
                      50,000 to 1,00,000
                    </option>
                    <option value="1,00,000 to 2,00,000">
                      1,00,000 to 2,00,000
                    </option>
                    <option value="More than 2,00,000">
                      More than 2,00,000
                    </option>
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
                    type="text"
                    className="form-control"
                    placeholder="City"
                    aria-label="Cirt"
                    name="Cirt"
                    required=""
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="input-group mb-3">
                  <textarea
                    name="Massage"
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
                    id="check"
                    required=""
                  />
                  <label className="form-check-label small" htmlFor="check">
                    Yes, I'd like the VR Wedding Team for Demo about a demo.
                  </label>
                </div>
              </div>
              <div className=" mt-4">
                <HCaptcha
                  sitekey={AppConflig.hCaptchaSiteToken}
                  onVerify={(token) => setToken(token)}
                />
              </div>
              <div className="col-12">
                <button
                  type="sumbit"
                  className="btn btn-primary mt-4 d-block w-100"
                >
                  Get Started
                </button>
                <ToastContainer posit ion="top-right" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ServiceForm;
