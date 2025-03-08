import React from 'react'

// Imgs
import react from "../../assets/icons/react.png";
import tailwind from "../../assets/icons/tailwind.png";
import js from "../../assets/icons/js.png";
import css from "../../assets/icons/css.png";
import html from "../../assets/icons/html.png";
import ts from "../../assets/icons/ts.png"
import pc from "../../assets/computer.png";

const technologies = [
  { src: react, alt: "React" },
  { src: tailwind, alt: "Tailwind" },
  { src: js, alt: "JS" },
  { src: html, alt: "HTML" },
  { src: ts, alt: "TS" },
  { src: css, alt: "CSS" }
];

//TODO: Fix the tailwindcss icon

export default function Technologies() {
  return (
    <section className="bg-gradient-to-b bg-[#1c1c2b] text-white min-h-[750px] h-auto flex flex-col items-center justify-center text-center px-8 py-16 gap-y-8">
      <h1 className="mb-12 text-4xl font-bold">Technologie Webowe</h1>

      <ul className="grid w-full grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
        {technologies.map(({ src, alt }) => (
          <li key={alt} className="flex flex-col items-center group">
            <div className="flex items-center justify-center w-24 h-24 transition-transform duration-300 border-2 border-black rounded-full bg-[#29293d] group-hover:scale-110">
              <img src={src} alt={alt} className="w-14 h-14" />
            </div>
          </li>
        ))}
      </ul>

      <img src={pc} alt="laptop" className="mt-12 w-80" />
    </section>
  );
}