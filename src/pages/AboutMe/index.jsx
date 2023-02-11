import React from 'react'
import "./style.css"

import Navbar from "../../components/Navbar"
import About from '../../components/About'

const AboutMe = () => {
    return (
        <main className='container-aboutMe'>
            <Navbar />
            <About/>
        </main>
    )
}

export default AboutMe