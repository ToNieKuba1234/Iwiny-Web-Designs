import React from 'react'

export default function HeroSection() {
  return (
    <section className='bg-[#b0b0b0] text-[#303030] h-[250px] xl:h-[500px] flex justify-center items-center font-bold p-7'>
        {/* Kompy */}
        <h1 className='relative text-6xl hidden xl:block text-center cursor-pointer after:bg-yellow-400 after:absolute after:h-2 after:w-0 after:-bottom-4 after:left-0 after:rounded-full hover:after:w-full after:transition-all after:duration-500 hover:text-[#474747] active:text-[#5e5d5d]'>
            Jesteś gotów rozwinąć swój <span className='font-serif text-[#181c5c]'>biznes</span>?
        </h1>
        
        {/* Tablety */}
        <h1 className='relative hidden text-5xl text-center cursor-pointer lg:block xl:hidden after:bg-yellow-400 after:absolute after:h-2 after:w-0 after:-bottom-3 after:left-0 after:rounded-full hover:after:w-full after:transition-all after:duration-500 hover:text-[#474747] active:text-[#5e5d5d]'>
            Jesteś gotów rozwinąć swój <span className='font-serif text-[#181c5c]'>biznes</span>?
        </h1>

        {/* Mobilka */}
        <h1 className='text-3xl text-center lg:hidden'>Jesteś gotów rozwinąć swój <span className='font-serif text-[#181c5c]'>biznes</span>?</h1>
    </section>
  )
}