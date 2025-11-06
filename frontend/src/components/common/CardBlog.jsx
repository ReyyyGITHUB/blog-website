import React from "react";
import { Link } from "react-router-dom";

export default function CardBlog({
  title,
  desc,
  username,
  datetime,
  pathPhoto = "/assets/photo1.png",
  navigateLink = "#",
}) {
  return (
    <Link
      to={navigateLink}
      className="group block h-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#6366f166]"
    >
      <article className="flex h-full w-full max-w-[380px] flex-col gap-6 rounded-xl border border-[#E5E7EB] bg-white p-5 shadow-lg transition duration-200 group-hover:-translate-y-1 group-hover:shadow-xl">
        {/* Top */}
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-lg">
            <img
              src={pathPhoto}
              alt={title}
              className="h-48 w-full object-cover transition duration-200 group-hover:scale-[1.02]"
            />
          </div>
          <div className="Text-Container flex flex-col gap-3">
            <h1 className="text-xl font-medium text-[#111827] wrap-break-words">
              {title}
            </h1>
            <p className="text-sm font-normal text-[#6B7280] wrap-break-words">
              {desc}
            </p>
          </div>
        </div>

        {/* bottom */}
        <div className="flex items-center justify-between text-sm text-[#4B5563]">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 overflow-hidden rounded-full bg-[#E5E7EB]">
              <img
                src="/assets/"
                alt={username}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="font-medium text-[#111827]">{username}</span>
          </div>

          <span>{datetime}</span>
        </div>
      </article>
    </Link>
  );
}
