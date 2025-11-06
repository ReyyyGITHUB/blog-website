import React from "react";
import HeroBanner from "../components/landing/HeroBanner";
import Navbar from "../components/layout/Navbar";
import BlogSection from "../components/landing/BlogSection";

export default function Landing() {
  return (
    <>
      <div className="flex flex-col mx-[120px] justify-center">
        {/* navbar */}
        <Navbar/>
        {/* Hero banner */}
        <HeroBanner imageUrl={"/assets/"} title={"testing"} subtitle={"testing from developer"} datetime={"dd/mm/yyyy"} articleText={"New Article!"} />
        <BlogSection />
        <footer className="mt-[120px] flex">Footer in here</footer>

      </div>
    </>
  );
}
