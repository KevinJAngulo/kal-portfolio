import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPython,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);

        return () => clearTimeout(timer);

    }, [])

    return (

        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t',' ','m', 'e']} idx={15}/>
                </h1>
                <p>Hi there! My name is Kevin Angulo Lezama and I'm from Venezuela.
                     I am an undergraduate at Wesleyan University class of 2024.</p>
                <br/>
                <p>I'm a highly curious and tech-savvy individual who believes that programming is the language of the future.
                     With a strong knowledge of programming and proficiency in Microsoft Office, I'm passionate about utilizing technology to solve complex problems and learning new things and staying up-to-date with the latest advancements in the field. 
                     Working collaboratively with teams, I excel in problem-solving and thrive in dynamic environments. I'm excited to connect with like-minded individuals and explore opportunities to make a positive impact through technology!</p>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                    <FontAwesomeIcon icon={faPython}  />
                    </div>
                    <div className="face2">
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="ball-scale-ripple-multiple" />
        </>
        
    )
}

export default About