
import React from 'react'
import Linkedin from "../../assets/linkedin.png"
import { Element } from 'react-scroll'
import Instagram from "../../assets/instagram.png"
import Github from "../../assets/github.png"
import "./Contact.css"
const Contact = () => {
  return (
    <Element className="contact" id ="contact">
        <h1>Contact</h1>
        <div className='contact__container'>
            <p>
                Email : <span>sangavi1508@gmail.com</span>
            </p>
            <p>
                Phone Number : <span>+91 8754683705</span>
            </p>
            <div className='contact__icons'> 
                <a href='https://www.linkedin.com/in/sangavi15'>
                  <img className="img1"src={Linkedin} alt=""/>
                </a>
                <a href='https://www.instagram.com/sangavi_art15?igsh=MjlueTcwdjNrZWdp'>
                  <img className='img2' src={Instagram} alt=""/>
                </a>
                <a href='https://github.com/KKSangavI'>
                  <img  className="img3"src={Github} alt=""/>
                </a>

            </div>
        </div>
    </Element>
  )
}

export default Contact