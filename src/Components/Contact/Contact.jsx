import React from 'react'
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-us-page">
    <div className="container">
      <h1>Contact Us</h1>
      
      <div className="contact-form">
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Contact;