import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaUser, FaEnvelope, FaPhoneAlt, FaLocationArrow, FaHome} from "react-icons/fa";

export default function GoaForm() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_uyg3gjm', 'template_a2jvt2c', form.current, 'QEw9fSxN3TxaP9GE8')
        .then((result) => {
            alert("Registered Successfully !")
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <section id='enquiry_bg_image'>
    <form id='enquiry_div' className="container" ref={form} onSubmit={sendEmail} style={{width:'95%'}}>
        <div className="row d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card text-white" style={{borderRadius:'1rem', backgroundColor:'#28363D'}}>
            <div className="card-body p-5 text-center">
                <h2 className="fw-bold mb-2">Registration Form</h2>
                <p className="text-white-50">We will Reach you soon !</p>
                
                {/* Name  */}
                <div className="input-group">
                    <span className="input-group-text"><FaUser /></span>
                    <input type="text" name='user_name' placeholder='Name' aria-label="Name" className="form-control" required/>
                </div>

                {/* Email  */}
                <div className="input-group mt-3">
                    <span className="input-group-text"><FaEnvelope/></span>
                    <input type="email" name='user_email' placeholder='Email' aria-label="Email" className="form-control" required/>
                </div>

                {/* Mobile Number  */}
                <div className="input-group mt-3">
                    <span className="input-group-text"><FaPhoneAlt/></span>
                    <input type="tel" name='user_number' placeholder='Whatsapp Number' aria-label="Number" className="form-control" required/>
                </div>

                {/* City */}
                <div className="input-group mt-3">
                    <span className="input-group-text"><FaLocationArrow/></span>
                    <input type="text" name='user_city' placeholder='City' aria-label="Number" className="form-control" required/>
                </div>

                {/* State  */}
                <div className="input-group mt-3">
                    <span className="input-group-text"><FaHome/></span>
                    <input type="text" name='user_state' placeholder='State' aria-label="Number" className="form-control" required/>
                </div>

                {/* Enquiry TextArea  */}
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
                    <textarea className="form-control" name='user_enquiry_text' id="exampleFormControlTextarea1" placeholder='Ask Us' rows="3"></textarea>
                </div>

                {/* Submit Button  */}
                <button className="btn btn-outline-light btn-lg px-5 mt-4" type="submit" value="Send">Submit</button>
            </div>

            </div>
            </div>
        </div>
        </form>
    </section>
  );
}
