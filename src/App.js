import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Explore from './components/Explore';
import Home from './components/Home';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import Itinerary1 from './components/Itinerary1';
import Itinerary2 from './components/Itinerary2';
import Itinerary3 from './components/Itinerary3';
import ContactUs from './components/ContactUs';
import ToshForm from './components/ToshForm';
import GoaForm from './components/GoaForm';
import KheergangaForm from './components/KheergangaForm'
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/itinerary1" element={<Itinerary1/>} />
        <Route path="/itinerary2" element={<Itinerary2/>} />
        <Route path="/itinerary3" element={<Itinerary3/>} />
        <Route path="/goaform" element={<GoaForm/>} />
        <Route path="/kheergangaform" element={<KheergangaForm/>} />
        <Route path="/toshform" element={<ToshForm/>} />
      </Routes>
    </>
  );
}

export default App;