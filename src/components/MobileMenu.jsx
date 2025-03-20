import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MobileMenu( { mobileMenu } ) {
    const [ serviceList, setServiceList ] = useState(false);
    const [ aboutList, setAboutList ] = useState(false);

    const navigate = useNavigate();

    const handleServiceList = () => {
        setServiceList(!serviceList);
    };

    const handleAboutList = () => {
        setAboutList(!aboutList);
    };
    
    return (
        <div className={`w-screen h-auto bg-white shadow-lg ${mobileMenu ? 'flex' : 'hidden'} md:hidden`}>
            <ul className="flex flex-col justify-center w-full text-white border-0 font-kanit">
                <li className="flex justify-center w-full px-8 py-4 bg-[#e51d61] active:bg-[#9b234b]" onClick={() => navigate("/")}>Główna</li>
                
                <li onClick={handleServiceList} className="flex justify-center w-full px-8 py-4 bg-[#e51d61] active:bg-[#9b234b]">
                    <div className="relative flex flex-row items-center gap-1">
                        <span className="">Usługi</span>
                        
                        {serviceList === false && (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg> 
                        )}

                        {serviceList === true && (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                            </svg>
                        )}
                    </div>
                </li>
                

                {/* active:bg-[#7e1d3d]
                hover:bg-[#9b234b]
                subNav: bg-[#b32655]
                Nav: bg-[#e51d61] */}

                {/* Te od Usług */}
                <ul className={`${serviceList ? 'flex' : 'hidden'} flex-col justify-center w-full`}>
                    <li className="flex justify-center w-full px-8 py-4 bg-[#b32655] hover:active:bg-[#7e1d3d]">Web Dev</li>
                    <li className="flex justify-center w-full px-8 py-4 bg-[#b32655] hover:active:bg-[#7e1d3d]">SEO</li>
                    <li className="flex justify-center w-full px-8 py-4 bg-[#b32655] hover:active:bg-[#7e1d3d]">Google PPC Ads</li>
                </ul>
                
                
                <li onClick={handleAboutList} className="flex justify-center w-full px-8 py-4 bg-[#e51d61] active:bg-[#9b234b]">
                    <div className="relative flex flex-row items-center gap-1">
                        <span className="">O nas</span>
                        
                        {aboutList === false && (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg> 
                        )}

                        {aboutList === true && (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                            </svg>
                        )}
                    </div>
                </li>
                
                {/* Te od O nas */}
                <ul className={`${aboutList ? 'flex' : 'hidden'} flex-col justify-center w-full`}>
                    <li className="flex justify-center w-full px-8 py-4 bg-[#b32655] active:bg-[#7e1d3d]" onClick={() => navigate("/onas")}>O nas</li>
                    <li className="flex justify-center w-full px-8 py-4 bg-[#b32655] hover:active:bg-[#7e1d3d]" onClick={() => navigate("/faq")}>FAQ</li>
                </ul>


                <li className="flex justify-center w-full px-8 py-4 bg-[#e51d61] active:bg-[#9b234b]" onClick={() => navigate("/cennik")}>Cennik</li>
                <li className="flex justify-center w-full px-8 py-4 bg-[#e51d61] active:bg-[#9b234b]" onClick={() => navigate("/kontakt")}>Kontakt</li>
            </ul>
        </div>
    )
}