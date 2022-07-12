import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { BsFillEnvelopeFill } from 'react-icons/bs'
const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2 className="section-title">Get in touch</h2>
            <ul>
                <li>
                    <a href="mailto:margishpatel287@gmail.com" target="__blank" >
                        <span className="btn btn-center">
                            <BsFillEnvelopeFill aria-hidden="true" className="mail-logo" />Email
                        </span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/margish287" target="__blank" aria-label="Github">
                        <span className="btn btn-center">
                            <AiFillGithub aria-hidden="true" className="github-logo" /> Github
                        </span>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/margish-patel/" target="__blank" aria-label="Linkedin">
                        <span className="btn btn-center">
                            <AiFillLinkedin aria-hidden="true" className="linkedin-logo" /> Linkedin
                        </span>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Contact;
