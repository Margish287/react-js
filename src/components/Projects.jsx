import React from 'react';
import {Link} from 'react-router-dom';
const Projects = () => {
    return (
        <section id="project" className="project">
            <h2 className="section-title">Projects</h2>
            <div className="project-container">
                <Link to='/projects/game'><h3 className="project-circle">Game</h3></Link>
                <Link to='/projects/to-do-app'><h3 className='project-circle'>To Do App</h3></Link>
                <Link to='/projects/api-call'><h3 className='project-circle'>Github profile viewer</h3></Link>
            </div>
        </section>
    );
}

export default Projects;
