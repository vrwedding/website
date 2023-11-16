import React from "react";
import Head from "next/head";
import ReactGA from "react-ga4";

const Layout = ({ children, title, desc, hasClass, classOpt }) => {
  const Gid = "G-JY08KJZ13G";
  ReactGA.initialize(Gid);
  ReactGA.send({ hitType: "pageview", page: "/" });

  return (
    <div
      className={`main-wrapper ${
        hasClass ? "overflow-hidden" : null
      } ${classOpt}`}
    >
      <Head>
        <title>
          {title
            ? `VR Wedding | ${title}`
            : "VR Wedding - Virtual Reality Services"}
        </title>
        {desc && <meta name="description" content={desc} />}
        <link rel="icon" href="/favicon.png" />
      </Head>

      {children}
    </div>
  );
};

export default Layout;
