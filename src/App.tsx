import { useState } from 'react'
import Home from './pages/Home'
import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import { Route, Routes, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import PracticeAreas from './pages/PracticeAreas'

function App() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname.slice(1));
  function handleTabChange(tab: string) {
    setActiveTab(tab);
  }

  return (
    <div className={`mendelson-website-container ${activeTab === "" ? "" : "info-tab"}`}>
    <NavBar handleTabChange={handleTabChange} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/practice-areas" element={<PracticeAreas />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </div>
  )
}

export default App
