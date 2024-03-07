import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/img/msg-icon.png'
import mail_icon from '../../assets/img/mail-icon.png'
import phone_icon from '../../assets/img/phone-icon.png'
import location_icon from '../../assets/img/location-icon.png'
import white_arrow from '../../assets/img/white-arrow.png'

const Contact = () => {
  return (
   <div className="contact">
    <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your, feedback, Questions, and suggestions are important to us as we strive to provide exceptional service to our university community. </p>
        <ul>
            <li><img src={mail_icon} alt="" /> Contact@subhash.dev</li>
            <li><img src={phone_icon} alt="" /> +1 123-456-7890</li>
            <li><img src={location_icon} alt="" /> 77 Wagholi, Pune <br /> MA 02139, India</li>
        </ul>
    </div>
    <div className="contact-col">
        <form >
            <label > Your Name</label>
            <input type="text" name="name" placeholder='Enter Your Name' required />
            <label > Phone number</label>
            <input type="tel" name="phone" placeholder='Enter Your mobile number ' required />
            <label> Writee your message here</label>
            <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>
            <button type="submit" className='btn dark-btn'> Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        {/* <span>{result}</span> */}
    </div>
   </div>
  )
}

export default Contact