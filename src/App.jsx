import { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
// import SignUp from './components/SignUp'
import './App.css'
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from "./Home"
function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </Router>
    )
}

export default App
