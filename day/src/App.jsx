import React from 'react'
import Navbar from './Components/Navbar'
import "./app.css";
import Products from './Components/Products';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
function App() {
  return (
    <div>
      <Navbar />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
