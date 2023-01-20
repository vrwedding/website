import React from "react";
import Layout from "@layout/Layout";
import Navbar from "@layout/Header/Navbar";
import CryptoFooter from "@layout/Footer/CryptoFooter";
import OurTeam from "@components/our-team/OurTeam";
import OurStory from "@components/our-story/OurStory";
import SupportOne from "@components/support/SupportOne";
import HeroSectionTwo from "@components/hero-section/HeroSectionTwo";

const AboutUs = () => {
  return (
    <Layout title="About Us" desc="this is about us page">
      <Navbar classOption="navbar-light" />
      <HeroSectionTwo />
      <OurStory />
      <OurTeam />
      <CryptoFooter />
    </Layout>
  );
};

export default AboutUs;
