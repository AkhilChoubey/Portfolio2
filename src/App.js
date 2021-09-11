import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route , Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./bootstrap.min.css";
import Home from './components/Home';
import Contact from './components/Contact';
import Skills from './components/Skills';


function App() {
  return (
    <div>
     {/* <Navbar /> */}
     
     <Home />
     <Skills />
     <Contact />
     <Router>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/certificate' exact component={Home} />
            <Route path='/projects' exact component={Home} />
            <Route path='/skills' exact component={Skills} />
            <Route path='/contact' exact component={Contact} />
        </Switch>
     </Router>
    </div>
  );
}

export default App;
