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
function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
            </Routes>
        </Router>
    )
}

export default App
