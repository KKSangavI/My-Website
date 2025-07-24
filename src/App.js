import React from 'react'
import Header from './Components/Header/Header'
import {TopContainer} from './Components/TopContainer/TopContainer'
import { SkillContainer } from './Components/SkillContainer/SkillContainer'
import ProjectContainer from './Components/ProjectContainer/ProjectContainer'
import "./App.css"
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <>
    <Header/>
    <TopContainer/>
    <SkillContainer/>
    <ProjectContainer/>
    <Contact/>
    </>
  )
}

export default App