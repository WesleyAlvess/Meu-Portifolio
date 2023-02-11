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
                <div className='img-arrow'>
                    <img src={Eu} alt="Eu" className='eu' />
                    <span className='arrow'><i class="fa-solid fa-arrow-right"></i></span>
                </div>
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
                        <img src={Projects} alt="Projects" />
                        Projects
                    </Link>
                    <Link to="/contact" className='links'>
                        <img src={Contact} alt="Contact" />
                        Contact
                    </Link>
                    <div className='social'>
                        <a href="https://github.com/WesleyAlvess"><i class="fa-brands fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/wesley-alves-pereira-27496920a/"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://www.instagram.com/wesleyalvp/"><i class="fa-brands fa-square-instagram"></i></a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
