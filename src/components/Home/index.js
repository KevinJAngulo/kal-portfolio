import LogoTitle from '../../assets/images/logo-home.png'
import { Link, NavLink } from 'react-router-dom'
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'
import Loader from 'react-loaders';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['e', 'v', 'i', 'n', ' ', 'A', 'n', 'g', 'u','l', 'o', ' ', 'L', 'e', 'z', 'a', 'm', 'a']
    const jobArray = ['A', "s", "p", "i", "r", "i", "n", "g", " ", "S", "o", "f", "t", "w", "a", "r", "e", " ", "D", "e", "v", "e", "l", "o", "p", "e", "r", '.']

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 6000);

        return () => clearTimeout(timer);

    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span> 
                    <span className={`${letterClass} _12`}>i</span> 
                    <br/>
                    <span className={`${letterClass} _13`}>I</span> 
                    <span className={`${letterClass} _14`}>'m</span> 
                    <img src={LogoTitle} alt= 'developer'/>
                    <AnimatedLetters letterClass={letterClass} 
                    strArray={nameArray} 
                    idx={15}/>
                    <br/>
                    <AnimatedLetters letterClass={letterClass} 
                    strArray={jobArray} 
                    idx={33}/>
                </h1>
                
                <br/>
                <h2>
                    Frontend Developer 
                </h2>
                <br/>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>

            </div>
            <Logo/>
        </div>
        <Loader type="ball-scale-ripple-multiple" />
        </>
        
    )
}

export default Home