// general
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// style
import './App.css';

// pages
import Home from './pages/Home';

// components
import Navbar from './components/Navbar';
import About from './pages/About';
import Workouts from './pages/Workouts';
import Contact from './pages/Contact';
import Nutrition from './pages/Nutrition';
import Stories from './pages/Stories';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/workouts' element={<Workouts />} />
        <Route path='/nutrition' element={<Nutrition />} />
        <Route path='/stories' element={<Stories />} />
        <Route path='/contact-us' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
