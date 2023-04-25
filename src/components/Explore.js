import React from 'react'
import {FaClock} from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function Explore() {

  return (
    <div className="container" id='explore_div'>
        <h1 className='text-center' id='itinerary_heading'><b>I T I N E R A R I E S</b></h1>
        <div className="row justify-content-around border-dark pt-3">
            {/* Card 1 */}
            <div className="text-center card my-5 mx-3 d-flex bg-light text-dark" style={{width: "20rem"}}>
                <div style={{boxShadow:"0px 5px 30px Black"}}><img src={require('./images/Kheerganga.jpg')} height={225} className="card-img-top" style={{marginTop:-20}} alt="image3"/></div>
                <div className="card-body" style={{paddingTop:30}}>
                    <h5 className="card-title"><strong>Kheerganga Trek</strong></h5>
                    <p><i>Valley of Hot Springs</i></p>
                    <p className="card-text">With Parvati River flowing through its Bosom, Enjoy the Hippie Culture and A Trek amidst the presence of Lush Green Mountains.</p>
                    <div className='d-flex justify-content-between'>
                        <span><b>₹</b><small> 3999/-</small></span>
                        <span><small><FaClock/> 2N/3D</small></span>
                    </div>
                    <Link className="btn mt-3" style={{backgroundColor:"#2F575D",color:'white', borderRadius:'18px'}} to="/itinerary2">View Details</Link>
                </div>
            </div>
            
            {/* Card 2 */}
            <div className="text-center card my-5 mx-3 d-flex bg-light text-dark" style={{width: "20rem"}}>
                <div style={{boxShadow:"0px 5px 30px Black"}}><img src={require('./images/Goa.jpg')} height={225} className="card-img-top" style={{marginTop:-20}} alt="image2"/></div>
                <div className="card-body" style={{paddingTop:30}}>
                    <h5 className="card-title"><strong>Goa</strong></h5>
                    <p><i>Land of Sun, Sand, and Sea.</i></p>
                    <p className="card-text">Where the sand is warm, the sun is hot, and the drinks are cold, days are lazy, the nights are crazy and you'll always feel like dancing more.</p>
                    <div className='d-flex justify-content-between'>
                        <span><b>₹</b><small> 4999/-</small></span>
                        <span><small><FaClock/> 2N/3D</small></span>
                    </div>
                    <Link className="btn mt-3" style={{backgroundColor:"#2F575D",color:'white', borderRadius:'18px'}} to="/itinerary1">View Details</Link>
                </div>
            </div>
            
            {/* Card 3 */}
            <div className="text-center card my-5 mx-3 d-flex bg-light text-dark" style={{width: "20rem"}}>
                <div className='' style={{boxShadow:"0px 5px 30px Black"}}><img src={require('./images/Tosh.jpg')} height={225} className="card-img-top" style={{marginTop:-20}} alt="image6"/></div>
                <div className="card-body" style={{paddingTop:30}}>
                    <h5 className="card-title"><strong>Tosh</strong></h5>
                    <p><i>Land of Wanderlust</i></p>
                    <p className="card-text">Enjoy the Hippie Culture of the farthest village of Parvati Valley, Surrounded by lush green gills and Snow dusted peaks with Cannabis plantations all around.</p>
                    <div className='d-flex justify-content-between'>
                        <span><b>₹</b><small> 3499/-</small></span>
                        <span><small><FaClock/> 2N/3D</small></span>
                    </div>
                    <Link className="btn mt-3" style={{backgroundColor:"#2F575D",color:'white', borderRadius:'18px'}} to="/itinerary3">View Details</Link>
                </div>
            </div>

            {/* Card 4 */}
            <div className="text-center card my-5 mx-3 d-flex bg-light text-dark" style={{width: "20rem"}}>
                <div className='' style={{boxShadow:"0px 5px 30px Black"}}><img src={require('./images/Varanasi.jpg')} height={225} className="card-img-top" style={{marginTop:-20}} alt="image4"/></div>
                <div className="card-body" style={{paddingTop:30}}>
                    <h5 className="card-title"><strong>Varanasi</strong></h5>
                    <p><i>Religious capital of India</i></p>
                    <p className="card-text">Situated on the banks of the holy River Ganges with a rich cultural and religious history that spans over 3,000 years.</p>
                    <div className='d-flex justify-content-between'>
                    <span><b>₹</b><small> -</small></span>
                        <span><small><i className="fa fa-map-marker me-1"></i>Uttar Pradesh</small></span>
                    </div>
                    {/* <Link className="btn mt-3" style={{backgroundColor:"#2F575D",color:'white', borderRadius:'18px'}} to="/itinerary1">View Details</Link> */}
                    <Link className="btn mt-3" style={{backgroundColor:"#2F575D",color:'white', borderRadius:'18px'}} to="/explore">Coming Soon</Link>
                </div>
            </div>

            {/* Card 5 */}
            <div className="text-center card my-5 mx-3 d-flex bg-light text-dark" style={{width: "20rem"}}>
                <div className='' style={{boxShadow:"0px 5px 30px Black"}}><img src={require('./images/Munnar.jpg')} height={225} className="card-img-top" style={{marginTop:-20}} alt="image5"/></div>
                <div className="card-body" style={{paddingTop:30}}>
                    <h5 className="card-title"><strong>Munnar</strong></h5>
                    <p><i>God's own Country</i></p>
                    <p className="card-text">Situated at the confluence of three mountains – Muthirapuzha, Nallathanni and Kundala at 1600m above sea level.</p>
                    <div className='d-flex justify-content-between'>
                        <span><b>₹</b><small> -</small></span>
                        <span><small><i className="fa fa-map-marker me-1"></i>Kerala</small></span>
                    </div>
                    <Link className="btn mt-3" style={{backgroundColor:"#2F575D",color:'white', borderRadius:'18px'}} to="/explore">Coming Soon</Link>
                </div>
            </div>

            {/* Card 6 */}
            <div className="text-center card my-5 mx-3 d-flex bg-light text-dark" style={{width: "20rem"}}>
                <div style={{boxShadow:"0px 5px 30px Black"}}><img src={require('./images/Jispa.jpg')} height={225} className="card-img-top" style={{marginTop:-20}} alt="image1"/></div>
                <div className="card-body" style={{paddingTop:30}}>
                    <h5 className="card-title"><strong>Jispa</strong></h5>
                    <p><i>A Pitstop to Leh</i></p>
                    <p className="card-text">This village makes people feel relaxed and help them to escape from the noisy crowded city life.</p>
                    <div className='d-flex justify-content-between'>
                        <span><b>₹</b><small> -</small></span>
                        <span><small><i className="fa fa-map-marker me-1"></i>Himachal Pradesh</small></span>
                    </div>
                    <Link className="btn mt-3" style={{backgroundColor:"#2F575D",color:'white', borderRadius:'18px'}} to="/explore">Coming Soon</Link>
                </div>
            </div>
        </div>
    </div>
  )
}