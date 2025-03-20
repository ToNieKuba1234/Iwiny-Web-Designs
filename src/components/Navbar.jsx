import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ setMobileMenu, mobileMenu }) {
    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    }

    const navigate = useNavigate();

    return (
        <div className="z-30 bg-[#e51d61] static lg:sticky top-0 w-screen h-[100px] flex justify-evenly items-center p-6 border-[#18141c] border-b-[1px]">
            <div className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-[70px] px-4 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                </svg>

                <div className='text-2xl text-white font-kanit'>
                    <h1 className='block'>Iwiny</h1>
                    <h1 className='xl:block'>Web Designs</h1>
                </div>
            </div>

            <div className='flex'>
                <ul className='justify-center hidden mt-2 ml-auto mr-10 space-x-8 md:flex'>
                    <li className='text-xl text-white cursor-pointer font-kanit underline-hover hover:text-gray-400 active:text-gray-500' onClick={() => navigate("/")}>Główna</li>
                    <li className="text-xl text-white cursor-pointer font-kanit group">
                        <div className="relative flex flex-row items-center gap-1">
                            <span className="hover:text-gray-400">Usługi</span>

                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>

                        <ul className="absolute invisible text-white transition-all duration-300 rounded-lg shadow-lg opacity-0 bg-[#b32655] mt-16-2 w- group-hover:opacity-100 group-hover:visible group-hover:translate-y-1">
                            <li className="p-2 rounded-lg min-w-[200px] hover:bg-[#9b234b] active:bg-[#7e1d3d]" onClick={() => navigate("/webdev")}>Web Dev</li>
                            <li className="p-2 rounded-lg min-w-[200px] hover:bg-[#9b234b] active:bg-[#7e1d3d]" onClick={() => navigate("/seo")}>SEO</li>
                            <li className="p-2 rounded-lg min-w-[200px] hover:bg-[#9b234b] active:bg-[#7e1d3d]" onClick={() => navigate("/gpa")}>Google PPC Ads</li>
                        </ul>
                    </li>
                    <li className="relative text-xl text-white cursor-pointer font-kanit group">
                        <div className="flex flex-row items-center gap-1">
                            <span className="hover:text-gray-400">O nas</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>

                        <ul className="absolute invisible text-white transition-all duration-300 rounded-lg shadow-lg opacity-0 bg-[#b32655] mt-16-2 w- group-hover:opacity-100 group-hover:visible group-hover:translate-y-1">
                            <li className="p-2 rounded-lg min-w-[200px] hover:bg-[#9b234b] active:bg-[#7e1d3d]" onClick={() => navigate("/onas")}>O nas</li>
                            <li className="p-2 rounded-lg min-w-[200px] hover:bg-[#9b234b] active:bg-[#7e1d3d]" onClick={() => navigate("/faq")}>FAQ</li>
                        </ul>
                    </li>

                    <li className='text-xl text-white cursor-pointer font-kanit underline-hover hover:text-gray-400 active:text-gray-500' onClick={() => navigate("/cennik")}>Cennik</li>
                    <li className='text-xl text-white cursor-pointer font-kanit underline-hover hover:text-gray-400 active:text-gray-500' onClick={() => navigate("/kontakt")}>Kontakt</li>
                </ul>

                <button onClick={toggleMobileMenu} className="block ml-auto mr-5 md:hidden">
                    {mobileMenu === false && (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                    {mobileMenu === true && (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
}