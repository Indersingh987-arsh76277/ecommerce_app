import './App.css';
import {BrowserRouter as Router ,Route,Routes,Outlet} from "react-router-dom"
import Home from './components/js/Home';
import Login from './components/js/Login';
import Register from './components/js/Register';
import Product from './components/js/Product';
import Products from './components/js/Products';
 
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/'  element={<Home />}>
             <Route path='/' element={<Products/>} />
             <Route path='/product/:id' element={<Product />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Outlet />
      </div>
    </Router>
    
  );
}

export default App;
