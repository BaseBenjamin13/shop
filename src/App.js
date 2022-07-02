import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import Monitors from './pages/monitors/Monitors';
import MonitorDetail from './pages/monitors/MonitorDetail';

import KeyBoards from './pages/keyboards/KeyBoards';
import KeyBoardDetail from './pages/keyboards/KeyBoardDetail';

import Mouses from './pages/mouses/Mouses';
import MouseDetail from './pages/mouses/MouseDetail'

import HeadPhones from './pages/headphones/HeadPhones';
import HeadPhoneDetail from './pages/headphones/HeadPhoneDetail';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/monitors" element={<Monitors />} />
            <Route path="/monitors/:id" element={<MonitorDetail />} />

            <Route path="/keyboards" element={<KeyBoards />} />
            <Route path="/keyboards/:id" element={<KeyBoardDetail />} />

            <Route path="/mouses" element={<Mouses />} />
            <Route path="/mouses/:id" element={<MouseDetail />} />

            <Route path="/headphones" element={<HeadPhones />} />
            <Route path="/headphones/:id" element={<HeadPhoneDetail />} />
        </Routes>
    </div>
  );
}

export default App;
