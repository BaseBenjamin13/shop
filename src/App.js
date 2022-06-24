import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import Monitors from './pages/Monitors';
import KeyBoards from './pages/KeyBoards';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/monitors" element={<Monitors />} />
            <Route path="/keyboards" element={<KeyBoards />} />
        </Routes>
    </div>
  );
}

export default App;
