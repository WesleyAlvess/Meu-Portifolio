import React from 'react'
import { Link } from 'react-router-dom'

import Eu from "../../images/eu.png"
import Hacker from "../../images/hacker.png"
import Skills from "../../images/skills.png"
import Projects from "../../images/projects.png"
import Contact from "../../images/contact.png"
// import { Container, SocialMedia } from "./style"
import "./style.css"


const Navbar = () => {
    return (
        <div className='container-navbar'>
            <nav>
                <img src={Eu} alt="Eu" className='eu'/>
                <div className='container-links'>
                    <Link to="/" className='links'>
                        <img src={Hacker} alt="About me" />
                        About me
                    </Link>
                    <Link to="/skills" className='links'>
                        <img src={Skills} alt="Skills" />
                        Skills
                    </Link>
                    <Link to="/projects" className='links'>
                        <img src={Projects} alt="" />
                        Projects
                    </Link>
                    <Link to="/contact" className='links'>
                        <img src={Contact} alt="" />
                        Contact
                    </Link>
                    <div className='social'>
                        <a href="#"><i class="fa-brands fa-github"></i></a>
                        <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="#"><i class="fa-brands fa-square-instagram"></i></a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
