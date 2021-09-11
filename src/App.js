import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
//import "./bootstrap/dist/js/bootstrap.bundle";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./bootstrap.min.css";
import Home from './components/Home';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  return (
    <div>
     <Navbar style={{position: 'sticky', top: '0'}}/>
     
     <Home />
     <Skills />
     <Contact />
    </div>
  );
}

export default App;
