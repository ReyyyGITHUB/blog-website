import React from "react";
import HeroBanner from "../components/landing/HeroBanner";
import Navbar from "../components/layout/Navbar";
import BlogSection from "../components/landing/BlogSection";
import Footer from "../components/layout/Footer";

export default function Landing() {
  return (
    <>
      <div className="flex flex-col mx-[120px] justify-center">

        {/* navbar */}
        <Navbar />
        {/* Hero banner */}
        <HeroBanner
          imageUrl={"/assets/"}
          title={"For Example"}
          subtitle={"testing from developer"}
          datetime={"dd/mm/yyyy"}
          articleText={"New Article!"}
        />

        <BlogSection title={"Latest Article"} subtitle={"Hello world"} />

        <div className="footer -mx-[120px]">
          <Footer />
        </div>
      </div>
    </>
  );
}
