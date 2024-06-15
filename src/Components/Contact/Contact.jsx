import React from 'react'
import "./Contact.css";

function Contact() {
  return (
<div className="max-width">
      <h2 className="title">Contact Us</h2>
      <div className="contact-content">
        <div className="column left">
          <div className="text">Let's Connect</div>
          <p>
            Ready to turn your dreams into reality? I'm thrilled to hear from you and explore the possibilities together.
            Whether you have a brilliant project in mind, a creative concept to discuss, or simply want to bounce ideas
            around, I'm all ears!
            <br /><br />
            Feel free to drop me a line with any questions, inquiries, or even just to say hello. Your message is important to
            me, and I'll make sure to get back to you promptly.
          </p>
          
            {/* <a href="https://instagram.com/aistscience"> */}
              <div className="row">
                <i className="fa-solid fa-user-large"></i>
                <div className="info">
                  <div className="head">Name</div>
                  <div className="sub-title">
                    <a href="https://aistechx.com/" style={{ textDecoration: 'none', color: '#333' }}>Admin</a>
                  </div>
                </div>
              </div>
          
            <div className="row">
              <i className="fa-solid fa-location-dot"></i>
              <div className="info">
                <div className="head">Address</div>
                <div className="sub-title">Sri Shakthi Nagar,<br/> L & T By - Pass,<br/>Chinniyampalayam Post, <br/>Coimbatore 641062.Tamilnadu. India.</div>
              </div>
            </div>
            <div className="row">
              <i className="fa-solid fa-envelope"></i>
              <div className="info">
                <div className="head">Email</div>
                <div className="sub-title">
                  <a href="mailto:loanapplicationapp@gmail.com" style={{ textDecoration: 'none', color: '#333' }}>loanapplicationapp@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="row">
              <i className="bi bi-translate"></i>
              <div className="info">
                <div className="head">Language Known</div>
                <div className="sub-title">Tamil, English, Telugu</div>
              </div>
            </div>
            <br />
          </div>
          <br/>
          <br/>
        <div className="column right">
          <div className="text">Message me</div>
          <form action="#">
            <div className="fields">
              <div className="field name">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="field email">
                <input type="email" placeholder="Your Email" required />
              </div>
            </div>
            <div className="field">
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="field textarea">
              <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
            </div>
            <div className="button-area">
              <button type="submit">Send message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;