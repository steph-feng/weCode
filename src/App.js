import './App.css';
import LandingPage from './components/LandingPage';
import PinterestLayout from './components/PinterestLayout';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {
  // const [level, setLevel] = useState(1);

  const [level, setLevel] = useState(() => {
    // Attempt to get the stored level from localStorage, or default to 1
    const savedLevel = localStorage.getItem("level");
    return savedLevel ? JSON.parse(savedLevel) : 1;
  });

  useEffect(() => {
    // Persist the level to localStorage whenever it changes
    localStorage.setItem("level", JSON.stringify(level));
  }, [level]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage setLevel={setLevel} />} />
        <Route path="/starter-pack" element={<PinterestLayout level={level} />} />
      </Routes>
    </div>
  );
}

export default App;