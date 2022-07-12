import React from 'react';
import { FaArrowUp } from 'react-icons/fa'

const Scrollup = () => {
    return (
        <div className="scroll-container">
            <div aria-label="Scroll up" className="scroll-up">
                <a href="#top">
                    <FaArrowUp aria-hidden="true" />
                </a>
            </div>
        </div>
    );
}

export default Scrollup;
