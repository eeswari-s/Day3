import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className="flex justify-between items-center px-14 py-5 bg-slate-900 text-white">
        <h2 className="text-2xl font-semibold logo">B11SHOP</h2>
        <ul className='flex gap-8 text-sm'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Products</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Contactus</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
