import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className="flex flex-col py-8 border bg-[#F9FAFB] border-[#E5E7EB] gap-11">
        {/* upper */}
        <div className="flex flex-col py-2.5 px-20 gap-2.5">
          <div className="flex justify-between flex-row">
            {/* left side */}
            <div className="flex flex-col gap-8">
              <div className="">Logo Website</div>
              <div className="flex flex-col gap-4">
                <h1>example@gmail.com</h1>
                <h1>+1 (123)-132-5321</h1>
              </div>
            </div>

            {/* right side */}
            <div className="rightside flex flex-col gap-8">
                <Link to={"/"}>Home</Link>
                <Link to={"/"}>About</Link>
                <Link to={"/"}>Contact Us</Link>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="flex flex-col pt-5 pb-4 px-20 border-t border-black">
            {/* container */}
            <div className="flex flex-row justify-between">
                {/* left side */}
                <div className="">c 2025 Website Name</div>
                {/* right side */}
                <div className="flex flex-row gap-6">
                    <img src="/assets/instagram.svg" alt="" />
                    <img src="/assets/instagram.svg" alt="" />
                    <img src="/assets/instagram.svg" alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
