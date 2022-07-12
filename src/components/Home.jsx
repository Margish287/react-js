import React, { createContext, useState } from 'react';
import { Header, Hero, Project, SkillStack, Contact, Footer, Scrollup } from './index'

export const themeContext = createContext(null);

const Home = () => {
    const [theme,setTheme] = useState("body-light")
  
    const toggleTheme = () => {
        setTheme((curr) => (curr === 'body-light'? 'body-dark' : 'body-light'))
    }

    return (
        <themeContext.Provider value={{toggleTheme, theme}}>
          <div id='body' className={theme}>
            <Header />
            <Hero />
            <Project />
            <SkillStack />
            <Contact />
            <Scrollup /> 
            <Footer />
          </div>
        </themeContext.Provider>
    );
}

export default Home;
