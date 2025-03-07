import React from 'react'

export default function InfoSection() {
    return (
        <section className='bg-[#1c1c2b] text-white py-12 px-6'>
            <h1 className='text-4xl font-bold text-center lg:text-5xl xl:text-6xl mb-36'>Co oferujemy?</h1>
            <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
                <li className='bg-[#29293d] p-6 rounded-2xl shadow-lg flex flex-col items-center text-center'>
                    <svg className='self-start w-12 h-12 mb-4 text-blue-500' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 4v16m8-8H4' />
                    </svg>
                    <h2 className='self-start mb-2 text-3xl font-semibold'>NOWOCZESNY DESIGN</h2>
                    <p className='self-start text-gray-400'>Opis o designie.</p>
                </li>
                <li className='bg-[#29293d] p-6 rounded-2xl shadow-lg flex flex-col items-center text-center'>
                    <svg className='self-start w-12 h-12 mb-4 text-green-500' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
                    </svg>
                    <h2 className='self-start mb-2 text-3xl font-semibold'>PEŁNĄ RESPONSYWNOŚĆ</h2>
                    <p className='self-start text-gray-400'>Opis o responsywności</p>
                </li>
                <li className='bg-[#29293d] p-6 rounded-2xl shadow-lg flex flex-col items-center'>
                    <svg className='self-start w-12 h-12 mb-4 text-yellow-500' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 8v4l3 3' />
                    </svg>
                    <h2 className='self-start mb-2 text-3xl font-semibold'>USŁUGI SEO</h2>
                    <p className='self-start text-gray-400'>Opis o SEO.</p>
                </li>
            </ul>
        </section>
    );
}