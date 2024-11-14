import React from 'react';
import './App.css';
import RegisterPage from './components/RegisterPage/RegisterPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ContactPage from "./components/ContactPage/ContactPage";
import AboutPage from "./components/AboutPage/AboutPage";
import Homepage from "./components/Homepage/Homepage";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<Homepage />} />
            </Routes>
        </Router>
    );
}

export default App;