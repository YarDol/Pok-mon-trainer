import React from 'react';
import Home from './pages/Home';
import TeamPage from './pages/TeamPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </Router>
  );
};

export default App;
