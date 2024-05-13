import './index.scss';
import LogoS from '../../../assets/images/front.png';
import {useRef, useEffect} from 'react';
import gsap from 'gsap-trial'


const Logo = () => {
    const bgRef = useRef()
    const solidLogoRef = useRef()

    useEffect(() => {
        console.log("Ref to img:", solidLogoRef.current); // Should output the <img> element
        gsap.fromTo(
            solidLogoRef.current,
            { opacity: 0 },
            { opacity: 1, delay: 2, duration: 4 }
        );
    }, []);
    
    

    return(
        <div className="logo-container" ref={bgRef}>
            <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt='Kevin'/>


            
        </div>
        
    )

}

export default Logo