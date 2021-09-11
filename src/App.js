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
import { withRouter } from 'react-router';

function App() {
  return (
    <div>
     {/* <Navbar /> */}
     <Router>
        <Switch>
            <Route path='/' exact component={withRouter(Home)} />
            <Route path='/certificate' component={withRouter(Home)} />
            <Route path='/projects' component={withRouter(Home)} />
            <Route path='/skills' component={withRouter(Skills)} />
            <Route path='/contact' component={withRouter(Contact)} />
        </Switch>
     </Router>
    </div>
  );
}

export default App;
