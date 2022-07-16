import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import ProjectsPage from '../ProjectsPage/ProjectsPage'
import ResumePage from '../ResumePage/ResumePage'
import AboutMePage from '../AboutMePage/AboutMePage'
import NavBar from '../../components/navBar/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <main id='pagesContainer'>
        <HomePage />
        <ProjectsPage id="projects" />
        <ResumePage id="resume" />
        <AboutMePage id="about" />
      </main>
    </div>
  );
}

export default App;
