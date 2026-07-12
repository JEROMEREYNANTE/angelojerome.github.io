// App.js


import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/index.js";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Contact from "./pages/contact.js";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/skills"
                    element={<Skills />}
                />
                <Route
                    path="/projects"
                    element={<Projects />}
                />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;