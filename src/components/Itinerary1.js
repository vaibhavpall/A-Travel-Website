import React from 'react'
import { Link } from 'react-router-dom'

export default function Itinerary1() {
  return (
    <>
    <div className="itinerary_image1">
        <div id='name'>Goa</div>
          <div id='itinerary_date'>14 June - 18 June</div>
          <div id='itinerary_route'>Mumbai to Mumbai</div>
          <div id="book_button">
            <Link to="/goaform"><button className='btn-sm' id='booknow_button'><b>Book Now</b></button></Link>
        </div>
        <span id='itinerary_highlights'>Hold your Beer, Waves are Coming.</span>
      </div>

      {/* Cards Section */}
      <div className="itinerary_lower1">
      <div className="row justify-content-evenly">
        {/* Card 1 */}
        <div className="card mt-5 mx-5" style={{width:'18rem'}}>
        <div className="card-header border text-center my-3">Day 1</div> 
          <div className="card-body text-left">
            <ul>
              <li>Calangute Beach</li>
              <li>Anjuna Beach</li>
              <li>Anjuna Market</li>
              <li>Baga Beach</li>
            </ul>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card mt-5 mx-5" style={{width:'18rem'}}>
        <div className="card-header border text-center my-3">Day 2</div>
          <div className="card-body text-left">
          <ul>
              <li>Panjim Church</li>
              <li>Old Goa Churches</li>
              <li>Fontainhas</li>
              <li>Sinquerim Beach</li>
            </ul>
          </div>
        </div>
      </div>
        
        {/* SVG Icon */}
        <div className='text-center mt-4'>
          <a href="https://drive.google.com/file/d/1yz7kb0MqmHYgjn6atYFRVEq-EVleyCfc/view?usp=sharing" target='_blank' rel="noopener noreferrer">
            <button className='btn btn-dark text-light'>Get Itinerary&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-download" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
            </svg>
            </button>
          </a>
        </div>
        {/* Footer Line  */}
        <p className='text-center mt-4'>©Parindey7</p>
        </div>
    </>
  )
}