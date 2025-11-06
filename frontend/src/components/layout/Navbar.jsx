import React from "react";

import NavigateLink from "../common/NavigateLink";
import ButtonPrimary from "../common/ButtonPrimary";

export default function Navbar() {
  return (
    <div>
      <div className="flex flex-row py-8 justify-between items-center">
        <h1 className="text-[24px] font-medium">Logo Website</h1>
        <div className="flex flex-row gap-4 items-center">
          <NavigateLink text={"Home"} link={"/"} />
          <NavigateLink text={"About"} link={"/about"} />
          <NavigateLink text={"Contact Us"} link={"/contact"} />

          <ButtonPrimary text={"Admin login"} />
        </div>
      </div>
    </div>
  );
}
