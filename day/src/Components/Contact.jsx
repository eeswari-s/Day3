import React from 'react'
import Footer from './Footer';

function Contact() {
    const a=10;
    const message="hello";
  return (
    <div>

      <section className='px-20 py-16 text-center bg-gray-100'>
              <h1>number:{a}</h1>
        <h1 className='text-3xl font-semibold mb-4'>Contact Us</h1>
        <p className='text-gray-600'>PHONE NUMBER:9087654321</p>
        <p className='text-gray-600'>B11SHOP@gmail.com</p>
        <p className='text-gray-600'>chennai</p>
      </section>
      <Footer text={message} />
    </div>
  )
}

export default Contact
