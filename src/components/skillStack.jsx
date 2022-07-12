import React from 'react';
import { AiFillHtml5,  } from 'react-icons/ai';
import { DiCss3, DiReact, DiGithubBadge } from 'react-icons/di';
import { SiJavascript, SiNodedotjs, SiExpress, SiMongodb } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

const SkillStack = () => {
    return (
        <section id="stack" className="stack">
            <h2 className="section-title">Tech Stack</h2>
            <div className="stack-container">
                <div className="tech-container">
                    <AiFillHtml5 className="html-logo large-logo" /> HTML
                </div>
                <div className="tech-container">
                    <DiCss3 className="css-logo large-logo" /> CSS
                </div>
                <div className="tech-container">
                    <SiJavascript className="javascript-logo large-logo" /> JavaScript
                </div>
                <div className="tech-container">
                    <DiReact className="react-logo large-logo" /> React.js
                </div>
                <div className="tech-container">
                    <TbBrandNextjs className="nextjs-logo large-logo" /> Next.js
                </div>
                <div className="tech-container">
                    <SiNodedotjs className="nodejs-logo large-logo" /> Node.js
                </div><div className="tech-container">
                    <SiExpress className="express-logo large-logo" /> Express.js
                </div>
                <div className="tech-container">
                    <SiMongodb className="mongodb-logo large-logo" /> MongoDB
                </div>
                <div className="tech-container">
                    <DiGithubBadge className="git-logo large-logo" /> Git
                </div>
            </div>
        </section>
    );
}

export default SkillStack;
