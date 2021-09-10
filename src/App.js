import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import "bootstrap/dist/js/bootstrap.bundle";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';

function App() {
  return (
    <div>
     <Navbar />
     <Home />
    </div>
  );
}

export default App;
