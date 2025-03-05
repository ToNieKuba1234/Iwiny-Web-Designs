import React from 'react'
import hero_icon from '../assets/hero-icon.png'
import LandingBg from '../assets/landing_bg.png'

export default function LandingPage() {
    return (
        <section className='flex flex-col min-h-screen gap-5 bg-center bg-no-repeat bg-cover lg:min-h-[50vh] lg:h-auto xl:min-h-screen lg:gap-0 lg:flex-row' style={{background: `url(${LandingBg})`}}>
            <div className='flex flex-col items-center justify-center w-full h-auto text-center text-white lg:w-2/3 my-7 lg:my-0 gap-y-8 lg:gap-y-5 font-kanit xl:w-1/2 xl:gap-y-10'>
                <div className="flex flex-col items-start w-full h-auto lg:w-full justify-evenly gap-y-7 xl:w-[55%] xl:h-auto">
                    <div className="self-center w-3/4 h-auto xl:w-full">
                        <p className="w-full text-5xl font-bold text-center lg:text-4xl lg:text-left xl:text-7xl">Detal w kodzie,</p>
                        <p className="w-full text-5xl font-bold text-center lg:text-4xl lg:text-left xl:text-7xl">Wielki Efekt</p>
                    </div>

                    <p className="self-center text-xl w-5/6 text-center lg:w-3/4 lg:text-left xl:w-[57%] xl:self-start">To twoja jedyna i niepowtarzalna szansa na odniesienie sukcesu marketingowego w internecie</p>

                    <button className="self-center lg:mr-32 xl:self-start px-6 z-30 py-3 bg-slate-800 rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#b32655] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl border-2 border-white">
                        Zaczynajmy
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-center w-full xl:w-1/2">
                <img src={hero_icon} alt="hero-icon" className="w-3/4 lg:w-2/3"/>
            </div>
        </section>
    )
}
