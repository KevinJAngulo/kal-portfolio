import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Hopper from "../../assets/images/hopper.png"
import Hangman from "../../assets/images/hangman.png"
import Box from "../../assets/images/box.png"
import Information from "../../assets/images/information.png"
import NQueens from "../../assets/images/nqueens.png"
import Robots from "../../assets/images/robots.png"

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    
    const projects = [
        {
            title: "Hopper Project",
            description: "The Hopper project involved creating a mechanical hopper activated by a rocket igniter. The challenge was to design a timer mechanism to initiate the hop within a specified time window. The final design utilized a spiral rolling timer, ingeniously built around the hopper's structure. This timer controlled a rolling ball that, upon reaching its destination, connected two wires to trigger the rocket igniter. The successful connection released a tensioned platform, powered by torsion springs, causing the hopper to launch vertically.",
            imageUrl: Hopper
        },
        {
            title: "Simplified Hangman Game",
            description: "This project explores simplifying the traditional word game Hangman through the use of a database containing over 350,000 English words. The system leverages a pandas DataFrame to provide hints based on the correctly guessed letters. Users interact with a console-based interface where they guess letters to form words. The game dynamically filters the database to suggest possible words, enhancing the traditional gameplay by integrating technological tools for a more engaging user experience. The project illustrates the practical application of database manipulation and pattern matching within game design.",
            imageUrl: Hangman
        },
        {
            title: "Puzzle Alarm Box",
            description: "The Puzzle Alarm Box project combines utility with cognitive engagement, designed to revolutionize morning routines. It required users to solve three distinct puzzles to turn off the alarm and access their smartphone, secured inside the box overnight. The first puzzle involved memorizing a sequence of lights, the second required sequence guessing with buttons, and the third was a blind maze navigated via touch. These challenges aimed to awaken both mind and body, effectively preventing oversleeping and the habit of snoozing.",
            imageUrl: Box 
        }, 
        {
            title: "Information Security Website",
            description: "The Information Security project offers a comprehensive guide on safeguarding data against cyber threats. It covers the importance of VPNs for creating secure connections, recognizing and avoiding phishing scams, tech support scams, and fake shopping sites. The project emphasizes the significance of using strong, complex passwords to enhance security, and includes a password generator tool for creating robust passwords. This initiative is crucial for educating users on preventing unauthorized access and ensuring data integrity in an increasingly digital world.",
            imageUrl: Information // Replace with the actual image URL
        }, 
        {
            title: "Advanced Modeling of the N-Queens Problem",
            description: "In this project, I delve into the N-Queens problem, employing the Alloy modeling language to understand and identify the fundamentally distinct solutions of the puzzle on different board sizes. Starting with a 4x4 board, the goal is to refine and perfect the approach before applying it to an 8x8 board. By focusing on distinguishing between fundamentally distinct solutions and those derived through symmetrical transformations, the project not only addresses algorithmic efficiency but also explores the deeper mathematical and computational facets of the N-Queens problem.",
            imageUrl: NQueens // Replace with the actual image URL
        },
        {
            title: "Soft Robots Lab Student Researcher",
            description: "My project is part of innovative research in robot component manufacturing using knitting technologies. I focus in developing an automated pneumatic system integrated with Arduino for soft robotics applications. This system meticulously monitors air pressure in a balloon, replicating limb movements and assessing the performance of robotic textiles.",
            imageUrl: Robots // Replace with the actual image URL
        }
        
        
        
        
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className='project-page'>
                    {projects.map((project, index) => (
                        <div className="project-container" key={index}>
                            <div className='text-zone-project'>
                            <h3>
                                <AnimatedLetters letterClass={letterClass} strArray={project.title.split('')} idx={15} />
                            </h3>
                            <p><div className="project-description">{project.description}</div></p>
                            </div>
                            <img src={project.imageUrl} alt={project.title} className="project-image" />
                            <br/>
                        </div>
                        
                    ))}
            </div>
            <Loader type="ball-scale-ripple-multiple" />
        </>
    );
}

export default Projects;
