import React from 'react'

export default function InfoSection() {
    return (
        <section className='bg-[#1c1c2b] text-white py-16 px-8'>
            <h1 className='text-4xl font-bold text-center lg:text-5xl xl:text-6xl mb-36'>Co oferujemy?</h1>
            <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 '>
                <li className="group bg-[#29293d] p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition-all duration-500 hover:bg-white">
                    <svg className="self-start w-12 h-12 mb-4 text-white transition-all duration-300 group-hover:text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>
                    <h2 className="self-start mb-2 text-xl font-semibold text-white transition-all duration-300 lg:text-2xl xl:text-3xl group-hover:text-black">
                        NOWOCZESNY DESIGN
                    </h2>
                    <p className="self-start text-xl text-left text-gray-400 transition-all duration-300 group-hover:text-black">
                        Tworzymy estetyczne, minimalistyczne i funkcjonalne projekty, które łączą elegancję z użytecznością. Dbamy o każdy detal, dostosowując wygląd do aktualnych trendów i potrzeb użytkowników. Nasze projekty cechuje spójność wizualna, przejrzystość oraz intuicyjna nawigacja, co sprawia, że są zarówno atrakcyjne, jak i wygodne w codziennym użytkowaniu.
                    </p>
                </li>
                <li className='group bg-[#29293d] p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition-all duration-500 hover:bg-white'>
                    <svg className='self-start w-12 h-12 mb-4 group-hover:text-black' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>

                    <h2 className='self-start mb-2 text-xl font-semibold lg:text-2xl xl:text-3xl group-hover:text-black'>PEŁNĄ RESPONSYWNOŚĆ</h2>
                    <p className='self-start text-xl text-left text-gray-400 group-hover:text-black'>Projektujemy strony i aplikacje, które doskonale wyglądają i działają na każdym urządzeniu – od smartfonów, przez tablety, po duże ekrany komputerów. Dzięki elastycznym układom i nowoczesnym technologiom zapewniamy płynne dostosowanie się interfejsu do różnych rozdzielczości, gwarantując wygodę i pełną funkcjonalność niezależnie od sposobu korzystania.</p>
                </li>
                <li className='group bg-[#29293d] p-6 rounded-2xl shadow-lg flex flex-col items-center transition-all duration-500 hover:bg-white'>
                    <svg className='self-start w-12 h-12 mb-4 group-hover:text-black' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                    </svg>
                    <h2 className='self-start mb-2 text-xl font-semibold lg:text-2xl xl:text-3xl group-hover:text-black'>USŁUGI SEO</h2>
                    <p className='self-start text-xl text-left text-gray-400 group-hover:text-black'>Optymalizujemy strony internetowe, aby osiągały wysokie pozycje w wynikach wyszukiwania. Dzięki skutecznym strategiom SEO, takim jak optymalizacja treści, techniczne usprawnienia oraz budowa wartościowego profilu linkowego, zwiększamy widoczność Twojej strony. Nasze działania pomagają przyciągnąć więcej użytkowników, poprawić ruch organiczny i zwiększyć konwersje, co przekłada się na realne korzyści biznesowe.</p>
                </li>
            </ul>
        </section>
    );
}