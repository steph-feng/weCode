import './App.css';
import LandingPage from './components/LandingPage';
import PinterestLayout from './components/PinterestLayout';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [level, setLevel] = useState(1);

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