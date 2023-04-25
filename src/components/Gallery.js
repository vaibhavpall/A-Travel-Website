import React from 'react'
import {FaYoutube} from "react-icons/fa";

export default function Gallery() {
  return (
    <>
<div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div id="carousel_image1"></div>

        <div className="container">
          <div className="carousel-caption text-start text-center">
            <h6><b>Deepak Tal Lake</b></h6>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div id="carousel_image2"></div>

        <div className="container">
        <div className="carousel-caption text-start text-center">
        <h6><b>Varanasi</b></h6>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div id="carousel_image3"></div>

        <div className="container">
        <div className="carousel-caption text-start text-center">
        <h6><b>Shimla</b></h6>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>


  {/* <!-- Marketing messaging and featurettes
  ================================================== -->
  <!-- Wrap the rest of the page in another container to center all the content. --> */}

  <div className="container marketing">
    <h2 className='text-center mb-4'><b>Recent Videos</b></h2>
    <div className="row d-flex justify-content-evenly">
      <div className="col-lg-4">
        <a href="https://youtu.be/p7qVubkp-bw" target='_blank' rel="noopener noreferrer">
        <div className="card" id='youtube_card'>
          <img height={300} src={require('./images/yt1.jpg')} className="card-img-top" alt="..."/>
          <div className="card-img-overlay align-middle">
            <FaYoutube id='youtube_icon'/>
          </div>
        </div>
        </a>
        <p className='mt-2'><b>Manali</b></p>                  
      </div>
      <div className="col-lg-4">
      <a href="https://youtu.be/IkMvR5WSjYo" target='_blank' rel="noopener noreferrer">
        <div className="card" id='youtube_card'>
          <img height={300} src={require('./images/yt2.jpg')} className="card-img-top" alt="..."/>
          <div className="card-img-overlay align-middle">
            <FaYoutube id='youtube_icon'/>
          </div>
        </div>
        </a>
        <p className='mt-2'><b>Varanasi</b></p>                  
      </div>
      <div className="col-lg-4">
      <a href="https://youtu.be/IJUa2ewSWDU" target='_blank' rel="noopener noreferrer">
        <div className="card" id='youtube_card'>
          <img height={300} src={require('./images/yt3.jpg')} className="card-img-top" alt="..."/>
          <div className="card-img-overlay align-middle">
            <FaYoutube id='youtube_icon'/>
          </div>
        </div>
        </a>
        <p className='mt-2'><b>Shimla</b></p>                  
      </div>
    </div>
</div>
    </>
  )
}