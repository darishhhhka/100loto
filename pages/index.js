import React from "react";
import PageDescription from "@/components/baseComponents/head/pageDescription/PageDescription";
import defaultPage from "@/constants/page-description";
import CustomHeader from "@/components/baseComponents/gui/customHeader/CustomHeader";
import Footer from "@/components/baseComponents/gui/footer/Footer";
import {footerContent, header} from "@/constants/copyright";

export default function Home() {
  return (
    <>
      <PageDescription {...defaultPage} />
      <CustomHeader {...header} />
      <Footer {...footerContent} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
