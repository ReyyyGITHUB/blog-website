// src/components/HeroBanner.jsx
import React from "react";

export default function HeroBanner({
  imageUrl,
  articleText,
  datetime,
  title,
  subtitle,
}) {
  return (
    <section className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
      {/* Background image */}
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-500">
          Image placeholder
        </div>
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Text content */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        <div className="px-8 md:px-16 text-white max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-400">
            {articleText}
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold">{title}</h1>
          <p className="mt-4 text-base md:text-lg text-gray-200">{subtitle}</p>
          <p className="mt-6 text-xs font-medium text-gray-400">{datetime}</p>
        </div>
      </div>
    </section>
  );
}
