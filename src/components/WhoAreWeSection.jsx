import React from 'react'
import coffee from '../assets/coffe.png';

export default function WhoAreWeSection() {
  return (
    <section className="text-white text-center bg-[#1c1c2b] font-kanit flex flex-col lg:flex-row h-screen gap-y-5 lg:gap-x-5 lg:text-left lg:h-[750px]">
        <div className="flex flex-col justify-center px-6 h-1/2 lg:h-full lg:w-1/2">
            <h1 className="text-4xl font-bold lg:text-5xl xl:text-6xl">Kim jesteśmy?</h1>
            <p className="mt-4 text-lg w-[65%] self-center lg:self-start">
            Jesteśmy nowoczesną agencją web development, która specjalizuje się w tworzeniu szybkich, intuicyjnych i zoptymalizowanych stron oraz aplikacji webowych.
            </p>
        </div>

        <div className="flex items-center justify-center h-1/2 lg:h-full lg:w-1/2">
            <img src={coffee} alt="coffee" className="object-cover w-2/3 max-h-full rounded-lg sm:w-1/2 md:w-[40%] lg:w-2/3 xl:w-1/2" />
        </div>
    </section>
  )
}