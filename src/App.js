import './App.css';
import LandingPage from './components/LandingPage';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LandingPage />} />
      </Routes>
      <LandingPage />
    </div>
  );
}

export default App;
