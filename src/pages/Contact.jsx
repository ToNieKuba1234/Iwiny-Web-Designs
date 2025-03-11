import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Wiadomość wysłana!');
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='bottom-0 left-0 w-[120%] h-[300px] bg-[#e51d61] rounded-b-[100%] -ml-[10%] flex justify-center items-center'>
        <p className='font-bold text-white text-7xl font-kanit'>Kontakt</p>
      </div>
      <div className='flex flex-col gap-6 py-16 mx-auto max-w-[100rem] lg:flex-row flex-grow'>
        <div className='flex-1 p-6 bg-gray-100 border-gray-300 rounded-lg flex flex-col lg:min-h-[400px] gap-y-5'>
            <h3 className='mb-2 text-3xl text-center sm:text-3xl lg:text-4xl xl:text-5xl font-kanit font-extralight'>DANE KONTAKTOWE</h3>
            <div className='flex flex-col ml-3 text-center gap-y-8'>
                <p className='text-lg font-semibold text-gray-700 sm:text-xl lg:text-3xl'>Iwiny Web Designs</p>
                <p className='text-lg text-gray-600 sm:text-xl'>ul. Spermowa 2/3, Iwiny</p>
                <p className='text-lg text-gray-600 sm:text-xl'>Email: <span className='font-semibold'>IwinczycyPotrafia@gmail.com</span></p>
                <p className='text-lg text-gray-600 sm:text-xl'>Nr. Telefonu: <span className='font-semibold'>+48 XXX XXX XXX</span></p>
            </div>
        </div>
        
        <form onSubmit={handleSubmit} className='flex-1 p-6 bg-white border-gray-300 rounded-lg flex flex-col justify-between h-full lg:min-h-[400px]'>
          <div className='flex flex-col gap-y-3'>
            <h3 className='mb-2 text-3xl text-center lg:text-4xl xl:text-5xl font-kanit font-extralight'>WYŚLIJ NAM WIADOMOŚĆ!</h3>
            <input 
              type='text' 
              name='name' 
              placeholder='Imie'
              className='w-full p-2 mb-4 border rounded'
              onChange={handleChange}
              required
            />

            <input 
              type='email' 
              name='email' 
              placeholder='Email'
              className='w-full p-2 mb-4 border rounded'
              onChange={handleChange}
              required
            />

            <input 
              type='tel' 
              name='phone' 
              placeholder='Nr. Telefonu'
              className='w-full p-2 mb-4 border rounded'
              onChange={handleChange}
            />

            <textarea 
              name='message' 
              placeholder='Wiadomość'
              className='w-full h-32 p-2 mb-4 border rounded'
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type='submit' className='bg-[#e51d61] text-white font-bold py-2 px-4 rounded w-full'>
            Umów się na rozmowę!
          </button>
        </form>
      </div>
    </div>
  );
}
