import React, { useState } from 'react'
import "./Project.css"

const Project = ({img,title,desc,link}) => {
    const [show,setShow]= useState(false);
  return (
    <a href={link}>
        <div className='project' onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
            {
                show?(
                    <div className='project__content'>
                        <h4>{title}</h4>
                        <p>{desc}</p>
                    </div>
                ):(
                    <img src={img}alt=''/>
                )
            }

        </div>
    </a>
  )
}

export default Project