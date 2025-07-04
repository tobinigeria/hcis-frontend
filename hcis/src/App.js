import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OnboardingNav from "./components/onboardingNav"
import Home from "./components/homePage"


function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
    </Router>
  
  );
}

export default App;
