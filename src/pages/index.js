import React from "react";
import Layout from "@layout/Layout";
import CryptoFooter from "@layout/Footer/CryptoFooter";
import Navbar from "@layout/Header/Navbar";
import ReviewOne from "@components/review/ReviewOne";
// import LatestBlog from "@components/blogs/LatestBlog";
import SupportOne from "@components/support/SupportOne";
// import TestimonialOne from "@components/testimonial/TestimonialOne";
import HeroSectionThree from "@components/hero-section/HeroSectionThree";
import FeatureImgContentOne from "@components/feature-img-content/FeatureImgContentOne";

const SassCompanyTwoHome = () => {
  return (
    <Layout>
      <Navbar />
      <HeroSectionThree />
      <ReviewOne />
      <FeatureImgContentOne />
      {/*<TestimonialOne darkBg />}
      {/* <LatestBlog /> */}
      <SupportOne />
      <CryptoFooter />
    </Layout>
  );
};

export default SassCompanyTwoHome;
