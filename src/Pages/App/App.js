import './App.css';
import HomePage from '../HomePage/HomePage'
import ProjectsPage from '../ProjectsPage/ProjectsPage'
import ResumePage from '../ResumePage/ResumePage'
import AboutMePage from '../AboutMePage/AboutMePage'

function App() {
  return (
    <div className="App">
      <HomePage/>
      <ProjectsPage/>
      <ResumePage/>
      <AboutMePage/>
    </div>
  );
}

export default App;
