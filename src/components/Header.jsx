import React, { useContext } from 'react';
import {FaMoon,FaSun} from 'react-icons/fa'
import { themeContext } from './Home';
import {Link} from 'react-router-dom';

const Header = () => {

    const {toggleTheme, theme } = useContext(themeContext);
    return (
        <header id="top">
            <Link className="icon-border header-title" to="/">MP</Link>
            <nav>
                <button aria-label="Toggle theme" className="icon-normal" onClick={toggleTheme}>
                    {theme === "body-light" ? <FaMoon aria-hidden="true" /> : <FaSun aria-hidden="true" /> }
                </button> 
            </nav>
        </header>
    );
}

export default Header;
