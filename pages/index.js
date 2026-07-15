import React from "react";
import PageDescription from "@/components/baseComponents/head/pageDescription/PageDescription";
import defaultPage from "@/constants/page-description";
import CustomHeader from "@/components/baseComponents/gui/customHeader/CustomHeader";
import Footer from "@/components/footer/Footer";
import {footerContent, header} from "@/constants/copyright";
import Intro from "@/components/intro/Intro";
import Results from "@/components/results/Results";
import Security from "@/components/security/Security";
import DownloadApp from "@/components/downloadApp/DownloadApp";
import About from "@/components/about/About";
import MoreWinners from "@/components/moreWinners/MoreWinners";

export default function Home() {
  return (
    <>
      <PageDescription {...defaultPage} />
      {/*<CustomHeader {...header} />*/}
      <Intro />
      <Results />
      <About />
      <Security />
      <DownloadApp />
      <MoreWinners />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
