import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Admission from './components/Admission'
import Contact from './components/Contact'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
