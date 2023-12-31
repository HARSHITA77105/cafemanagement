import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Button} from 'reactstrap'
import Base from './Components/Base';
// import About from './pages/About';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<Home/>}></Route>
     <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>
   
   
  );
}

export default App;
