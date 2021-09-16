import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";

// import "./bootstrap.min.css";
import Home from './components/Home';
import Contact from './components/Contact';
import Skills from './components/Skills';
import { withRouter } from 'react-router';

import AnimatedCursor from "react-animated-cursor";
import Certificates from './components/Certificates';
function App() {

  return (
    <div>
     {/* <Navbar /> */}
     <Router>
     <div>
     {/* <AnimatedCursor />
      */}
      <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='193, 11, 111'
      outerAlpha={0.5}
      innerScale={0.9}
      outerScale={10}
    />
     <Navbar style={{position: 'sticky', top: '0'}} />
        <Switch>
            <Route path='/' exact component={withRouter(Home)} />
            <Route path='/certificates' component={withRouter(Certificates)} />
            <Route path='/projects' component={withRouter(Home)} />
            <Route path='/skills' component={withRouter(Skills)} />
            <Route path='/contact' component={withRouter(Contact)} />
        </Switch>
        </div>
     </Router>
    </div>
  );
}

export default App;
