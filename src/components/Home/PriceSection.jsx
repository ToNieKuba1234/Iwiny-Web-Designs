import React from 'react'

export default function PriceSection() {
  return (
    <section className='bg-[#b0b0b0] flex flex-col items-center py-16 gap-y-16 h-auto'>
      <h1 className='m-10 text-5xl font-bold text-center text-[#303030] xl:text-6xl'>
        Przystępne pakiety cenowe dla każdego.
      </h1>
      
      <ul className='grid w-5/6 h-auto grid-cols-1 gap-8 lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-12 xl:grid-cols-3 xl:gap-8'>
        <li className='flex flex-col w-full bg-white rounded-3xl'>
          <div className='px-6 py-8 sm:p-10 sm:pb-6'>
            <h2 className='text-3xl font-medium tracking-tighter text-gray-600'>Lump Sum</h2>
            <ul className='mt-2 text-sm text-gray-500 list-inside'>
              <li>Podpunkt.</li>
              <li>Podpunkt.</li>
              <li>Podpunkt.</li>
              <li>Podpunkt.</li>
              <li>Podpunkt.</li>
              <li>Podpunkt.</li>
              <li>Podpunkt.</li>
              <li>Podpunkt.</li>
            </ul>
            <p className='mt-6 text-5xl font-light tracking-tight text-black'>1500zł
              <span className='text-base font-medium text-gray-500'> +100zł/mo hosting</span>
            </p>
          </div>
          <div className='flex px-6 pb-8 sm:px-8'>
            <a className='flex items-center justify-center w-full px-6 py-2.5 text-white bg-black border-2 border-black rounded-full hover:bg-transparent hover:border-black hover:text-black text-sm' href='#'>
              Zaczynajmy
            </a>
          </div>
        </li>
        
        <li className='flex flex-col w-full bg-white rounded-3xl'>
          <div className='px-6 py-8 sm:p-10 sm:pb-6'>
            <h2 className='text-3xl font-medium tracking-tighter text-gray-600'>Miesięczna</h2>
            <ul className='mt-2 text-sm text-gray-500 list-inside'>
              <li>Podpunkt.</li>
              <li>Podpunkt.</li>
              <li>Podpunkt.</li>
              <li>Podpunkt.</li>
              <li>Podpunkt.</li>
              <li>Podpunkt.</li>
              <li>Podpunkt.</li>
              <li>Podpunkt.</li>
            </ul>
            <p className='mt-6 text-5xl font-light tracking-tight text-black'>450zł
              <span className='text-base font-medium text-gray-500'> /mo</span>
            </p>
          </div>
          <div className='flex px-6 pb-8 sm:px-8'>
            <a className='flex items-center justify-center w-full px-6 py-2.5 text-white bg-black border-2 border-black rounded-full hover:bg-transparent hover:border-black hover:text-black text-sm' href='#'>Zaczynajmy</a>
          </div>
        </li>
        
        <li className='flex flex-col w-full bg-white rounded-3xl lg:col-span-2 lg:w-1/2 lg:mx-auto xl:w-full xl:col-span-1'>
          <div className='px-6 py-8 sm:p-10 sm:pb-6'>
            <h2 className='text-3xl font-medium tracking-tighter text-gray-600'>E-Commerce</h2>
            <ul className='mt-2 text-sm text-gray-500 list-inside'>
              <li>Podpunkt.</li>
              <li>Podpunkt.</li>
              <li>Podpunkt.</li>
              <li>Podpunkt.</li>
              <li>Podpunkt.</li>
              <li>Podpunkt.</li>
              <li>Podpunkt.</li>
              <li>Podpunkt.</li>
            </ul>
            <p className='mt-6 text-5xl font-light tracking-tight text-black'>10 000zł</p>
          </div>
          <div className='flex px-6 pb-8 sm:px-8'>
            <a className='flex items-center justify-center w-full px-6 py-2.5 text-white bg-gray-400 border-2 rounded-full cursor-not-allowed' href='#'>Dostępne wkrótce</a>
          </div>
        </li>
      </ul>
    </section>
  )
}
