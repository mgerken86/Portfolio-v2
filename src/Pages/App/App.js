import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import ProjectsPage from '../ProjectsPage/ProjectsPage'
import ResumePage from '../ResumePage/ResumePage'
import AboutMePage from '../AboutMePage/AboutMePage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/projects" element={ <ProjectsPage/> } />
        <Route path="/resume" element={ <ResumePage/> } />
        <Route path="/about" element={ <AboutMePage/> } />
      </Routes>
    </div>
  );
}

export default App;
