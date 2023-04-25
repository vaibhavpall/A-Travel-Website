import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div className="bg-image">
        <div className='container text-center' id='child_div'>
            <span><h1 id="heading">MODERN GYPSIES</h1></span>
            <span><h6 id='tagline'>Welcome to Parindey</h6></span>
            <span><h6 id='description'><small>Inexpensive Itineraries. Aesthetic Accomodation. Offbeat Spots. High Vibes.</small></h6></span>
            <Link to="/explore"><button className='btn' id='explore_button'><b>Explore</b></button></Link>
        </div>    
      </div>
    </>
  )
}