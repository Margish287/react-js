import './css/App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApiCall, Game, ToDoApp } from './project-comp'
import { Home } from "./components";

function App() {
  
  return (<div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects/api-call' element={<ApiCall />} />
          <Route path='/projects/game' element={<Game />} />
          <Route path='projects/to-do-app' element={<ToDoApp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
