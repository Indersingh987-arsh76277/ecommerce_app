import './App.css';
import {BrowserRouter as Router ,Route,Routes} from "react-router-dom"
import Home from './components/js/Home';
import Login from './components/js/Login';
import Register from './components/js/Register';
 
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path={'/'} exact element={<Home />} />
          <Route path={'/login'} exact element={<Login />} />
          <Route path={'/register'} exact element={<Register />} />
        </Routes>
          
      </div>
    </Router>
    
  );
}

export default App;
