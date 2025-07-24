import React from 'react'
import { Element } from 'react-scroll'
import Project from '../Project/Project'
import "./ProjectContainer.css"

const ProjectContainer = () => {
    const project =[
        {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTCPi2Cs_Flg6V7tL-QR9OOkfddsfvsO8pwA&s",
        title:"WhatsApp Web UI Clone (Frontend Only)",
        desc:" visually accurate, interactive clone of the WhatsApp Web interface — entirely frontend-based Core: HTML5 + Tailwind CSS ",
        link:" https://kksangavi.github.io/project5/",
        },
        {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTCPi2Cs_Flg6V7tL-QR9OOkfddsfvsO8pwA&s",
        title:"Cakes Factory – Frontend UI Showcase",
        desc:"A charming bakery-themed website UI built entirely with frontend technologies. It features a warm, inviting design to showcase bakery products, company info, offers, testimonials, and contact details",
        link:"https://kksangavi.github.io/project4/",
        },
        {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTCPi2Cs_Flg6V7tL-QR9OOkfddsfvsO8pwA&s",
        title:"E-commerce website",
        desc:"A static e-commerce website built using only HTML and CSS, designed to showcase products in a clean and visually appealing layout. This project focuses purely on frontend design, simulating an online shopping experience. ",
        link:" https://kksangavi.github.io/project2/",
        },
        {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTCPi2Cs_Flg6V7tL-QR9OOkfddsfvsO8pwA&s",
        title:"Image Hover Effects - CSS Transformations Project",
        desc:"A simple yet visually engaging frontend project demonstrating image hover effects using only HTML and CSS. The project highlights smooth transitions and transformations applied when users hover over images.",
        link:"https://kksangavi.github.io/project3/",
        },
        

    ]
    
  return (
    <Element className="projectContainer" id="project">
        <h1>Projects</h1>
        <p>Here are some project  </p>
        <div className="projectcontainer__projects">
            {
                project.map((project,index)=>{
                    return(
                        <Project key={index} img={project.img} title={project.title} desc={project.desc} link={project.link}/>
                    )
                })
            }

        </div>
    </Element>
  )
}

export default ProjectContainer