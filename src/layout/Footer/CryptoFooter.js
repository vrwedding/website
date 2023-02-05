import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";

const CryptoFooter = () => {
  return (
    <footer className="bg-dark-black crypto-footer pt-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="crypto-footer-widget text-center">
              <div className="">
                <Link href="/">
                  <a className="crypto-logo">
                    <Image
                      src="/logo-white.png"
                      className="mb-30"
                      alt="logo"
                      width={113}
                      height={36}
                    />
                  </a>
                </Link>
                <p>
                  Introducing a revolutionary new way to capture the magic of
                  your special day - virtual reality wedding services from our
                  startup! Our team uses cutting-edge technology to create
                  stunning 360 degree videos of your wedding, allowing you to
                  relive every precious moment in immersive detail. Whether
                  you're looking to share your special day with friends and
                  family who couldn't be there in person, or simply want to
                  treasure the memories forever, our virtual reality services
                  are the perfect choice
                </p>
              </div>
              <nav className="crypto-footer-nav py-5">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item px-lg-4 px-3">
                    <Link href="/">
                      <a className="text-decoration-none fw-semibold text-white">
                        Home
                      </a>
                    </Link>
                  </li>
                  <li className="list-inline-item px-lg-4 px-3">
                    <Link href="/about-us">
                      <a className="text-decoration-none fw-semibold text-white">
                        Training
                      </a>
                    </Link>
                  </li>
                  <li className="list-inline-item px-lg-4 px-3">
                    <Link href="/about-us">
                      <a className="text-decoration-none fw-semibold text-white">
                        Franchise
                      </a>
                    </Link>
                  </li>
                  <li className="list-inline-item px-lg-4 px-3">
                    <Link href="/about-us">
                      <a className="text-decoration-none fw-semibold text-white">
                        Team
                      </a>
                    </Link>
                  </li>
                  <li className="list-inline-item px-lg-4 px-3">
                    <Link href="/about-us">
                      <a className="text-decoration-none fw-semibold text-white">
                        Contact Us
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
              <h4 className="text-white mb-4 fw-medium">Join VR Community</h4>
              <ul className="list-unstyled crypto-footer-social pb-120">
                <li className="list-inline-item">
                  <a href="#/">
                    <i>
                      <FaFacebookF />
                    </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#/">
                    <i>
                      <FaTwitter />
                    </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#/">
                    <i>
                      <FaLinkedin />
                    </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#/">
                    <i>
                      <FaTwitter />
                    </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#/">
                    <i>
                      <FaPhone />
                    </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#/">
                    <i>
                      <FaWhatsapp />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="crypto-footer-border py-3">
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
    </footer>
  );
};

export default CryptoFooter;
