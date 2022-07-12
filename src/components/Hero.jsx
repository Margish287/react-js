import React from 'react';
import resume from '../asset/Margish - Resume.pdf'

const Hero = () => {
    return (
        <div className="hero">
            <h1>Hello. I am <span className="hero-name">Margish</span> 
                <span className="hero-name">Patel.</span>
            </h1>
            <div className="hero-about">
                <p>I am a full stack developer. I enjoy writing clean code, building beautiful user interfaces. I also make the apis with node and express with using MongoDb database.
                </p>
                <a className="resume" href={resume} download><span className="btn">Resume</span>
                </a>
            </div>
        </div>
    );
}

export default Hero;
