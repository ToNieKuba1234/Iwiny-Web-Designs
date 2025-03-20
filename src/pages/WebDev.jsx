import React from 'react';

export default function WebDev() {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <div className='bottom-0 left-0 w-[120%] h-[300px] bg-[#e51d61] rounded-b-[100%] -ml-[10%] flex justify-center items-center'>
        <p className='font-bold text-white text-7xl font-kanit'>Web Dev</p>
      </div>
      <div className='flex flex-col gap-6 py-16 mx-auto max-w-[100rem] lg:flex-row flex-grow'>
        <div className='flex flex-col flex-1 p-6 bg-gray-100 border-gray-300 rounded-lg gap-y-5'>
          <h3 className='mb-2 text-3xl text-center lg:text-4xl xl:text-5xl font-kanit font-extralight'>Czym jest Web Development?</h3>
          <p className='text-lg text-gray-700 sm:text-xl'>
            Web Development to proces tworzenia stron internetowych i aplikacji webowych.
            Obejmuje front-end (interfejs użytkownika) oraz back-end (logikę i bazę danych).
          </p>
          <p className='text-lg text-gray-700 sm:text-xl'>
            Popularne technologie używane w web developmencie to HTML, CSS, JavaScript, React, Node.js i wiele innych.
          </p>
        </div>

        <div className='flex flex-col justify-between flex-1 h-full p-6 bg-white border-gray-300 rounded-lg'>
          <h3 className='mb-2 text-3xl text-center lg:text-4xl xl:text-5xl font-kanit font-extralight'>Jak zacząć?</h3>
          <ul className='space-y-3 text-lg text-gray-700 list-disc list-inside sm:text-xl'>
            <li>Zacznij od HTML, CSS i JavaScript</li>
            <li>Poznaj frameworki jak React czy Vue</li>
            <li>Naucz się obsługi backendu i baz danych</li>
            <li>Buduj projekty i zdobywaj doświadczenie</li>
          </ul>
        </div>
      </div>
    </div>
  );
}