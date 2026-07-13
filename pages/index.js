import React from "react";
import PageDescription from "@/components/baseComponents/head/pageDescription/PageDescription";
import defaultPage from "@/constants/page-description";
import CustomHeader from "@/components/baseComponents/gui/customHeader/CustomHeader";
import Footer from "@/components/baseComponents/gui/footer/Footer";
import {footerContent, header} from "@/constants/copyright";
import Intro from "@/components/intro/Intro";

export default function Home() {
  return (
    <>
      <PageDescription {...defaultPage} />
      {/*<CustomHeader {...header} />*/}
      <Intro />
      <Footer {...footerContent} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
