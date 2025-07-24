import React from 'react'
import { Link } from 'react-scroll'
import "./TopContent.css"

export const TopContent = () => {
  return (
    <div className='topContent'>
        <div className='topcontent__container'>
            <h1>Sangavi Kannadhasan</h1>
            <p>Fontend Developer</p>
            <a href='https://drive.google.com/file/d/19hgC-7AZSU5xGmQiPID8DlcKh3HSA_xu/view?usp=drivesdk'>
                <button className='topcontent__downloadbutton'>Download CV</button>
            </a>
            <Link to ="project" smooth={true} duration={500}>
            <button className='topcontent__workbutton'>MY Work</button>
            </Link>
        </div>
    </div>
  )
}
