import React from 'react'
import { Link } from 'react-router-dom'

import Eu from "../../images/eu.png"
import {Container, SocialMedia} from "./style"


const Navbar = () => {
    return (
        <Container>
            <nav>
                <img src={Eu} alt="Eu" />
                <div>
                    <Link to="/" ><p>About me</p></Link>
                    <Link to="/skills" ><p>Skills</p></Link>
                    <Link to="/projects" ><p>Projects</p></Link>
                    <Link to="/contact" ><p>Contact</p></Link>
                </div>
                <SocialMedia>
                    <a href="#"><i class="fa-brands fa-github"></i></a>
                    <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="#"><i class="fa-brands fa-square-instagram"></i></a>
                </SocialMedia>
            </nav>
        </Container>
    )
}

export default Navbar
