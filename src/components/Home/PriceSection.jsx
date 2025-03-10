import React from 'react'

export default function PriceSection() {
  const Check = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );

  const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  );
  
  return (
    <section className='bg-[#b0b0b0] flex flex-col items-center py-16 gap-y-16 h-auto'>
      <h1 className='my-16 text-5xl font-bold text-center text-[#303030] xl:text-6xl'>
        Przystępne pakiety cenowe dla każdego.
      </h1>
      
      <ul className='grid w-5/6 h-auto grid-cols-1 gap-8 lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-12 xl:grid-cols-3 xl:grid-rows-1 xl:gap-8'>
        <li className='flex flex-col w-full bg-white rounded-3xl'>
          <div className='px-6 py-8 sm:p-10 sm:pb-6'>
            <h2 className='text-4xl font-medium tracking-tighter text-gray-600'>Lump Sum</h2>
            <ul className='flex flex-col mt-2 text-gray-500 list-inside text-md gap-y-5'>
              <li className='flex flex-row justify-between w-[90%] m-auto'>
                <span>Design i Stworzenie Strony</span>
                <Check />
              </li>
              <li className='flex flex-row justify-between w-[90%] m-auto'>
                <span>Wsparcie 24/7</span>
                <XIcon />
              </li>
              <li className='flex flex-row justify-between w-[90%] m-auto'>
                <span>Własna Domena</span>
                <Check />
              </li>
              <li className='flex flex-row justify-between w-[90%] m-auto'>
                <span>+100zł/mo hosting</span>
                <Check />
              </li>
              <li className='flex flex-row justify-between w-[90%] m-auto'>
                <span>Dożywotnie aktualizacje</span>
                <XIcon />
              </li>
              <li className='flex flex-row justify-between w-[90%] m-auto'>
                <span>Customowe Logo</span>
                <XIcon />
              </li>
              <li className='flex flex-row justify-between w-[90%] m-auto'>
                <span>250zł opłaty za każdą kolejną podstronę po 5.</span>
                <Check />
              </li>
            </ul>
            <p className='mt-6 text-5xl tracking-tight text-black'>1499,99zł
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
            <h2 className='text-4xl font-medium tracking-tighter text-gray-600'>Miesięczna</h2>
            <ul className='flex flex-col mt-2 text-gray-500 list-inside gap-y-5 text-md'>
              <li className='flex flex-row justify-between w-[90%] m-auto'>
                <span>Design i Stworzenie Strony</span>
                <Check />
              </li>
              <li className='flex flex-row justify-between w-[90%] m-auto'>
                <span>Wsparcie 24/7</span>
                <Check />
              </li>
              <li className='flex flex-row justify-between w-[90%] m-auto'>
                <span>Własna Domena</span>
                <Check />
              </li>
              <li className='flex flex-row justify-between w-[90%] m-auto'>
                <span>Hosting w Cenie</span>
                <Check />
              </li>
              <li className='flex flex-row justify-between w-[90%] m-auto'>
                <span>Dożywotnie aktualizacje</span>
                <Check />
              </li>
              <li className='flex flex-row justify-between w-[90%] m-auto'>
                <span>Customowe Logo</span>
                <XIcon />
              </li>
              <li className='flex flex-row justify-between w-[90%] m-auto'>
                <span>250zł opłaty za każdą kolejną podstronę po 5.</span>
                <Check />
              </li>
            </ul>
            <p className='mt-6 text-5xl tracking-tight text-black'>599,99zł
              <span className='text-base font-medium text-gray-500'> /mo</span>
            </p>
          </div>
          <div className='flex px-6 pb-8 sm:px-8'>
            <a className='flex items-center justify-center w-full px-6 py-2.5 text-white bg-black border-2 border-black rounded-full hover:bg-transparent hover:border-black hover:text-black text-sm' href='#'>Zaczynajmy</a>
          </div>
        </li>
        
        <li className='flex flex-col w-full bg-white rounded-3xl lg:col-span-2 lg:w-1/2 lg:mx-auto xl:w-full xl:col-span-1'>
          <div className='px-6 py-8 sm:p-10 sm:pb-6'>
            <h2 className='text-4xl font-medium tracking-tighter text-gray-600'>E-Commerce</h2>
            <ul className='flex flex-col mt-2 text-gray-500 list-inside gap-y-5 text-md'>
              <li className='flex flex-row justify-between w-[90%] m-auto'>
                <span>Własny Sklep w Shopify</span>
                <Check />
              </li>
              <li className='flex flex-row justify-between w-[90%] m-auto'>
                <span>Konfiguracja Dodatkowych Aplikacji</span>
                <Check />
              </li>
              <li className='flex flex-row justify-between w-[90%] m-auto'>
                <span>Integrowanie Wysyłki</span>
                <Check />
              </li>
              <li className='flex flex-row justify-between w-[90%] m-auto'>
                <span>Samouczek w Shopify</span>
                <Check />
              </li>
              <li className='flex flex-row justify-between w-[90%] m-auto'>
                <span>Wsparcie 24/7</span>
                <Check />
              </li>
              <li className='flex flex-row justify-between w-[90%] m-auto'>
                <span>Customowe Logo</span>
                <Check />
              </li>
              <li className='flex flex-row justify-between w-[90%] m-auto'>
                <span>Nielimitowane edycje za 50zł/mo</span>
                <Check />
              </li>
            </ul>
            <p className='mt-6 text-5xl tracking-tight text-black'>10 000zł</p>
          </div>
          <div className='flex px-6 pb-8 sm:px-8'>
            <a className='flex items-center justify-center w-full px-6 py-2.5 text-white bg-gray-400 border-2 rounded-full cursor-not-allowed' href='#'>Dostępne wkrótce</a>
          </div>
        </li>
      </ul>
    </section>
  )
}
