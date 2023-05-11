import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../src/components/Pages/Home";
import ExperiencePage from "../src/components/Pages/Experience";
import SkillsPage from "../src/components/Pages/Skills";
import EducationPage from "../src/components/Pages/Education";
import DownloadsPage from "../src/components/Pages/Downloads";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/experience" component={ExperiencePage} />
          <Route path="/skills" component={SkillsPage} />
          <Route path="/education" component={EducationPage} />
          <Route path="/downloads" component={DownloadsPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
