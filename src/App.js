import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";


import Home from './components/Home';
import Contact from './components/Contact';
import Skills from './components/Skills';
import { withRouter } from 'react-router';

import AnimatedCursor from "react-animated-cursor";
import Certificates from './components/Certificates';
import Projects from './components/Projects';
function App() {

  return (
    <div>
     <Router>
     <div>
    
      <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='193, 11, 111'
      outerAlpha={0.5}
      innerScale={0.9}
      outerScale={10}
    />
    <div style={{width:'100%',position: 'sticky', top: '0',zIndex: '100'}}>
     <Navbar />
     </div>
        <Switch>
            <Route path='/' exact component={withRouter(Home)} />
            <Route path='/certificates' component={withRouter(Certificates)} />
            <Route path='/projects' component={withRouter(Projects)} />
            <Route path='/skills' component={withRouter(Skills)} />
            <Route path='/contact' component={withRouter(Contact)} />
        </Switch>
        </div>
     </Router>
    </div>
  );
}

export default App;
