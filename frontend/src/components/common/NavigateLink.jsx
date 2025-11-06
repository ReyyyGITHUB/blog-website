import React from "react";
import { Link } from "react-router-dom";

export default function NavigateLink({ text, link }) {
  return (
    <div>
      <Link to={link} className="font-normal text-base p-2 text-[#111827] hover:font-medium">
        {text}
      </Link>
    </div>
  );
}
