import React from 'react'
import { Link } from 'react-scroll'
import "./TopContent.css"
// import DOWNLOAD from "../../assets/SANGAVI_CV.pdf";

export const TopContent = () => {
  return (
    <div className='topContent'>
        <div className='topcontent__container'>
            <h1>Sangavi Kannadhasan</h1>
            <p>Frontend Developer</p>
            <a href="/SANGAVI_CV.pdf" download>
              <button className='topcontent__downloadbutton'>Download CV</button>
            </a>
            <Link to ="project" smooth={true} duration={500}>
            <button className='topcontent__workbutton'>MY Work</button>
            </Link>
        </div>
    </div>
  )
}
