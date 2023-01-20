import React, { useState } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";
export default function HeroFifteen() {
  const [isOpen, setOpen] = useState(false);
  return (
    <section
      className="event-hero"
      style={{
        background: "url('/event/event-h-bg.jpg')no-repeat center center/cover",
      }}
    >
      <div className="position-relative">
        <div className="container">
          <div className="row align-items-md-center">
            <div className="col-lg-6">
              <div className="event-hero-content">
                <span className="text-pink fw-bold">27-29 Feb 2023 | Goa</span>
                <h1 className="fw-bold display-5">
                  <span className="display-2 fw-bold">VR Wedding</span> <br />
                  Workshop
                </h1>
                Virtual Reality or 360-degree movies are the most recent
                invention in the wedding market. Join us to learn about business
                opportunities, network, and receive training in Virtual Reality
                wedding coverage.
                <div className="action-btns mt-4 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
                  <Link href="/signup">
                    <a className="btn btn-primary bg-pink me-3 mb-3">
                      Book Seat
                    </a>
                  </Link>
                  <Link href="/request-for-demo">
                    <a className="btn border-pink text-pink mb-3">
                      Download PDF
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mt-5 mt-lg-0 event-hero-img">
                <img
                  src="/event/h-spea.png"
                  className="img-fluid"
                  alt="Event"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
