import React from "react";
import { Link } from "react-router-dom";

export default function ButtonPrimary({ text }) {
  return (
    <div>
      <Link to={"/admin"}>
        <button className="flex bg-[#2563EB] rounded-sm py-3 px-4 text-white hover:bg-blue-700">
          {text}
        </button>
      </Link>
    </div>
  );
}
