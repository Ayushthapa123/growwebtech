import emailjs from "emailjs-com";
import React from 'react';
import {AiOutlinePhone,AiOutlineMail} from 'react-icons/ai'
import {SiGmail} from 'react-icons/si'
import {FaMapMarkerAlt} from 'react-icons/fa';
import '../css/contact.css'

export default function ContactForm() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_c1a0sst', 'template_s3lp672', e.target, 'user_knhqxsZVXvP2iAjVkQ8IY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        alert('Thanks for contacting us we will look froward soon!!')
    }

    return(
        <div>
            <div className="container">

            <p className='title'>CONTACT US</p>


<div className='phone-email'>

<p><AiOutlinePhone/> 9846793894</p>
<p><SiGmail/> growwebtechnology@gmail.com</p>
<p><FaMapMarkerAlt/> Kupondole,Lalitpur Kathmandu</p>
</div>


<div className='contact-form'>
            
   
            <form onSubmit={sendEmail}>
                 
                        <div >
                            <input type="text"  placeholder="Name" name="name" required minLength='2' maxLength='40'/>
                        </div>
                        <div >
                            <input type="text" placeholder="Phone No" name="email" required minLength='8' maxLength='18'/>
                        </div>
                        <div >
                            <input type="text"  placeholder="Subject" name="subject" minLength='2' maxLength='40'/>
                        </div>
                        <div id='text-area'>
                            <textarea  id="texta"  placeholder="Your message" name="message"></textarea>
                        </div>
                        <div>
                          <button type='submit' >Send Message</button><br/>

                        </div>
                   
                </form>
                </div>
            </div>
        </div>
    )
}