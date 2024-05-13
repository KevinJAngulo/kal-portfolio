import { Link, NavLink } from 'react-router-dom'
import './index.scss'; 
import LogoS from '../../assets/images/logo-k4.png'
import LogoSubtitle from '../../assets/images/logo_sub3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faUser, faEnvelope, faProjects, faBriefcase} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className= "nav-bar">

        <Link className = "logo" to = "/">
            <img src = {LogoS} alt = 'logo'/>
            <img className= "sub-logo" src = {LogoSubtitle} alt = "slobodan"/>
        </Link>

        <nav>
            <NavLink exact="True" activeClassName="active" to="/">
                <FontAwesomeIcon icon={faHome} color= "#4d4d4e"/>
            </NavLink>

            <NavLink exact="True" activeClassName="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color= "#4d4d4e"/>
            </NavLink>

            <NavLink exact="True" activeClassName="active" className="projects-link" to="/projects">
                <FontAwesomeIcon icon={faBriefcase} color= "#4d4d4e"/>
            </NavLink>

            <NavLink exact="True" activeClassName="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color= "#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel ='noreferrer' 
                href="https://www.linkedin.com/in/kevin-angulo-lezama-7830001b3/"
                >
                    <FontAwesomeIcon icon={faLinkedin} color= "#4d4d4e"/>
                </a>

            </li>
            <li>
                <a target="_blank" rel="noreferrer"
                href="https://github.com/KevinJAngulo"
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
    </div>
    
)
export default Sidebar