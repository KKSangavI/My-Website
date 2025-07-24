import React from 'react'
import { Element } from 'react-scroll'
import Image from "../../assets/skill.jpg"
import Linearprogress from "@material-ui/core/Linearprogress"
import "./SkillContainer.css"

export const SkillContainer = () => {
  return (
    <Element className="skillcontainer" id="skills">
      <div className='skillcontainer__image'>
        <img src={Image} alt="" />
      </div>
      <div className='skillcontainer__text'>
        <h2>SKILLSET</h2>
        <div className='skillconatiner__skillset'>
          <h5>HTML</h5>
          <div className='skillconatiner__slider skillcontainer__slider1'>
            <Linearprogress variant="determinate" value={90} />
          </div>
        </div>
        <div className='skillconatiner__skillset'>
          <h5>CSS</h5>
          <div className='skillconatiner__slider skillcontainer__slider2'>
            <Linearprogress variant="determinate" value={85} />
          </div>
        </div>
        <div className='skillconatiner__skillset'>
          <h5>JS</h5>
          <div className='skillconatiner__slider skillcontainer__slider3'>
            <Linearprogress variant="determinate" value={70} />
          </div>
        </div>
        <div className='skillconatiner__skillset'>
          <h5>REACT</h5>
          <div className='skillconatiner__slider skillcontainer__slider4'>
            <Linearprogress variant="determinate" value={65} />
          </div>
        </div>
        <div className='skillconatiner__skillset'>
          <h5>TAILWIND CSS</h5>
          <div className='skillconatiner__slider skillcontainer__slider5'>
            <Linearprogress variant="determinate" value={80} />
          </div>
        </div>
        <div className='skillconatiner__skillset'>
          <h5>PYTHON</h5>
          <div className='skillconatiner__slider skillcontainer__slider6'>
            <Linearprogress variant="determinate" value={60} />
          </div>
        </div>

      </div>
    </Element >
              )
}
