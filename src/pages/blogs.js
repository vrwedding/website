import React from "react";
import Layout from "@layout/Layout";
import CryptoFooter from "@layout/Footer/CryptoFooter";
import Navbar from "@layout/Header/Navbar";
import BlogFeature from "@components/blogs/BlogFeature";
import PageHeader from "@components/common/PageHeader";

const Blogs = () => {
  return (
    <Layout title="Blog" desc="This is blog page">
      <Navbar />
      <PageHeader
        title="VR Blogs"
        desc="Gets the latest updates, insights and happening of Virtual Reality Wedding Industry."
        blogtags
      />
      <BlogFeature />
      <CryptoFooter />
    </Layout>
  );
};

export default Blogs;
