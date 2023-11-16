/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import HeroTitle from "../common/HeroTitle";
import axios from "axios";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import AppConflig from "./App.conflig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HeroSectionFourth = ({ bgDark }) => {
  const [token, setToken] = useState("");
  const success = () => toast("Email sent successfully.!", { theme: "dark" });
  const error = () => toast("Please fill tha Captcha.!", { theme: "dark" });
  const error1 = () =>
    toast("Failed to send email. Please try again later.!", { theme: "dark" });

  const handleSubmit = (event) => {
    const formData = new FormData(event.target);
    const MobileNumber = formData.get("number");
    event.preventDefault();

    if (token) {
      const data = {
        username: "AKIAVG3KVGIQ5K5C54EV",
        password: "BGI30r7ViaHz5pMhtMjkqw/GDeAD4S3McLoMJltIaaqF",
        server_addr: "email-smtp.eu-north-1.amazonaws.com",
        server_port: "587",
        destination_email: "gewgawrav@gmail.com",
        sender_email: "vrwedding@catax.me",
        subject: "Refferal Request",
        body: `
      VR Wedding - Refferal Request
   
      Mobile Number: ${MobileNumber}
   
      Message: I want to register as refferal for VR Wedding`,
      };
      axios
        .post("https://emailsender.catax.me/sendEmail", data)
        .then((Response) => {
          console.log(Response);
          event.target.reset();
          success(); // Fix typo here
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
    <section
      className={`hero-section ptb-120 ${bgDark ? "bg-dark" : "bg-white"}`}
      style={{
        background:
          "url('/shape/dot-dot-wave-shape.svg')no-repeat bottom center",
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-xl-5 col-lg-5">
            <div className="hero-content-wrap mt-5 text-center text-xl-start text-lg-start">
              <HeroTitle
                title="Simply make money by Introducing Us"
                desc="Your loved ones need to know about the amazing new trend of virtual reality wedding coverage "
              />
              <div className="hero-subscribe-form-wrap pt-4 position-relative m-auto m-xl-0 d-none d-md-block d-lg-block d-xl-block">
                <form
                  id="subscribe-form"
                  name="email-form"
                  className=""
                  onSubmit={handleSubmit}
                >
                  <div className="hero-subscribe-form d-block d-lg-flex d-md-flex mb-3">
                    <input
                      type="number"
                      className="form-control me-2"
                      name="number"
                      data-name="Email"
                      placeholder="Enter mobile number"
                      id="email-address"
                      required
                    />
                    <input
                      type="submit"
                      value="Make me Affiliate"
                      data-wait="Please wait..."
                      className="btn btn-primary mt-3 mt-lg-0 mt-md-0"
                    />
                  </div>
                  <ToastContainer position="top-center" />
                  <HCaptcha
                    sitekey={AppConflig.hCaptchaSiteToken}
                    onVerify={(token) => setToken(token)}
                  />
                </form>
                <ul className="nav subscribe-feature-list mt-3">
                  <li className="nav-item">
                    <span className="ms-0">
                      <FaRegCheckCircle className="far me-2 text-primary" />
                      Earn 20,000 INR per intro
                    </span>
                  </li>
                  <li className="nav-item">
                    <span>
                      <FaRegCheckCircle className="far me-2 text-primary" />
                      No hidden conditions{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 mt-4 mt-xl-0"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionFourth;
