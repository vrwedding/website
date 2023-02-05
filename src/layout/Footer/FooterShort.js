import React from "react";
import Link from "next/link";

const FooterShort = () => {
  return (
    <footer className="footer-section">
      {/* <!--footer bottom start--> */}
      <div className="footer-bottom bg-dark text-white py-4">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-md-7">
              <div className="crypto-footer-left">
                <p className="m-0 text-center text-lg-start">
                  Copyright@VR Weddings. 2023. All rights reserved.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-5">
              <div className="crypto-footer-right text-center text-md-end">
                <ul className="list-unstyled mt-3 mt-md-0">
                  <li className="list-inline-item">
                    <Link href="/help-center">
                      <a className="text-decoration-none">Download Brochure</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--footer bottom end--> */}
    </footer>
  );
};

export default FooterShort;
