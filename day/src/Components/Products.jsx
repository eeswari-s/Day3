import React from 'react'
import p1 from "../assets/p1.avif";
import p2 from "../assets/p2.jpeg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.avif";

function Products() {
  return (
    <div>
      <section className="px-16 py-16 bg-gray-50">
        <h2 className='text-3xl font-semibold text-center mb-10'>our Products</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
            {[p1,p2,p3,p4].map((img,i)=>(
                <div className='bg-white p-5 rounded-2x shadow-md hover:shadow-xl transition' key={i}>
                    <img src={img} 
                    className='rounded-xl mb-4 h-48 w-full object-cover'/>
                    <h3 className='text-lg font-medium'>product {i+1}</h3>
                    <p className="text-gray-600 mt-1">Rs.{400 + i * 500}</p>
                    <button className='mt-4 w-full py-2 rounded-full bg-slate-900 text-white hover:bg-slate-200'>Add to cart</button>
                    </div>
            ))}
        </div>
      </section>
    
    </div>
  )
}

export default Products
