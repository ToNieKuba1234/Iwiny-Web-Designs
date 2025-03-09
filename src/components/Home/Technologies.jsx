import React from 'react';

import react from "../../assets/icons/react.png";
import tailwind from "../../assets/icons/tailwind.png";
import js from "../../assets/icons/js.png";
import css from "../../assets/icons/css.png";
import html from "../../assets/icons/html.png";
import ts from "../../assets/icons/ts.png";
import pc from "../../assets/computer.png";

const technologies = [
  { src: react, alt: "React", link: "https://reactjs.org/" },
  { src: tailwind, alt: "Tailwind", link: "https://tailwindcss.com/" },
  { src: js, alt: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { src: html, alt: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { src: ts, alt: "TypeScript", link: "https://www.typescriptlang.org/" },
  { src: css, alt: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" }
];

export default function Technologies() {
  return (
    <section className="bg-gradient-to-b bg-[#1c1c2b] w-full text-white h-auto flex flex-col justify-between items-center gap-y-20">
      <h1 className="my-16 text-4xl font-bold text-center lg:text-5xl xl:text-6xl">Technologie Webowe</h1>
      <ul className="grid w-auto grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
        {technologies.map(({ src, alt, link }) => (
          <li key={alt} className="flex flex-col group">
            <a
              href={link}
              title={alt}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full"
            >
              <div className="flex items-center justify-center w-32 h-32 transition-transform duration-300 border-2 border-black rounded-full bg-[#29293d] group-hover:scale-105 group-hover:bg-[#383850]">
                <img src={src} alt={alt} className="w-16 h-16" />
              </div>
            </a>
          </li>
        ))}
      </ul>
      
      <div className="relative flex items-center justify-center w-full mt-16">
        <div className="absolute bottom-0 left-0 w-[120%] h-[150px] bg-[#b0b0b0] rounded-t-[100%] -ml-[10%]"></div>
        <img src={pc} alt="laptop" className="w-[30rem] z-10" />
      </div>
    </section>
  );
}