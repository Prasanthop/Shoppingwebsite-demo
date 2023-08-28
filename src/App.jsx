import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Navbar/About';
import Navbar from './Navbar/Navbar';
import Contact from './Navbar/Contact';
import Home from './Home/Home';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/products" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/img" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;

