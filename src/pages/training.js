import EventCta from "@components/cta/EventCta";
import EventSession from "@components/events/EventSession";
import HeroFifteen from "@components/hero-section/HeroFifteen";
import CryptoFooter from "@layout/Footer/CryptoFooter";
import Navbar from "@layout/Header/Navbar";
import Layout from "@layout/Layout";
import React from "react";
import LatestBlog from "@components/blogs/LatestBlog";

const Conference = () => {
  return (
    <Layout>
      <Navbar classOption="position-absolute" />
      <HeroFifteen />
      <EventSession />
      <EventCta />
      <LatestBlog />
      <CryptoFooter />
    </Layout>
  );
};

export default Conference;
