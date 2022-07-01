import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import Monitors from './pages/Monitors';
import KeyBoards from './pages/KeyBoards';
import Mouses from './pages/Mouses';
import HeadPhones from './pages/HeadPhones';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/monitors" element={<Monitors />} />
            <Route path="/keyboards" element={<KeyBoards />} />
            <Route path="/mouses" element={<Mouses />} />
            <Route path="/headphones" element={<HeadPhones />} />
        </Routes>
    </div>
  );
}

export default App;
