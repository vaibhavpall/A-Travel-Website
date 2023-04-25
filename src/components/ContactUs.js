import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

export default function ContactUs() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_uyg3gjm', 'template_38nrbjn', form.current, 'QEw9fSxN3TxaP9GE8')
        .then((result) => {
            console.log(result.text);
            alert("Enquiry Sent. We will reach you soon !")
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
<div id="contact" className="contact-area section-padding">
	<div className="container ">										
		<div className="section-title text-center">
			<h1>Get in Touch</h1>
		</div>					
		<div className="row">
			<div className="col-lg-7">	
				<div className="contact">
					<form className="form" ref={form} onSubmit={sendEmail}>
						<div className="row">
                            <div className="form-floating col-md-6 my-2">
                                <input type="text" name='user_name' className="form-control" placeholder="Name" required/>
                                <label className='mx-3' htmlFor="floatingInput">Name</label>
                            </div>
                            <div className="form-floating col-md-6 my-2">
                                <input type="text" name='user_ig' className="form-control" placeholder="Instagram Handle"/>
                                <label className='mx-3' htmlFor="floatingInput">Instagram Handle</label>
                            </div>
							<div className="form-floating col-md-12 my-2">
                                <input type="number" name='user_number' className="form-control" placeholder="Number" required/>
                                <label className='mx-3' htmlFor="floatingInput">Number</label>
							</div>
                            <div className="form-floating col-md-12 my-2">
                                <input type="email" name='user_email' className="form-control" placeholder="Email" required/>
                                <label className='mx-3' htmlFor="floatingInput">Email</label>
							</div>
							<div className="form-floating col-md-12 my-2">
                                <textarea className="form-control" name='user_enquiry' placeholder="Enquiry" id="floatingTextarea2" required style={{height: '150px'}}></textarea>
                                <label className='mx-3' htmlFor="floatingTextarea2">Enquiry</label>
							</div>
							<div className="col-md-12 text-center my-2">
								<button type="submit" value="Send" className="btn btn-contact-bg" >Send Message</button>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div className="col-lg-5">
				<div className="single_address">
					<a href="mailto:travelwithparindey7@gmail.com"><i className="fa fa-envelope"></i></a>
					<h4>travelwithparindey7@gmail.com</h4>
				</div>
				<div className="single_address">
					<a href='tel:+918117877065'><i className="fa fa-phone"></i></a>
					<h4>+91 8117877065</h4>
				</div>	
                <div className="single_address">
					<a href='https://www.youtube.com/@parindey_7' target='_blank' rel="noopener noreferrer"><i className="fa fa-youtube-play"></i></a>
					<h4>parindey_7</h4>
				</div>
                <div className="single_address">
                    <a href='https://www.instagram.com/travel_with_parindey7/' target='_blank' rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
					<h4>@travel_with_parindey7</h4>
				</div>		
			</div>
		</div>
	</div>
</div>
  )
}
