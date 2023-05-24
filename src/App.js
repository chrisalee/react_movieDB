import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleMovie from "./pages/SingleMovie";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./pages/About";

const App = () => {
  return (
    <Router basename={"/react_movieDB"}>
      <Nav />
      <Routes>
        <Route path="/react_movieDB" element={<Home />} />
        <Route path="/react_movieDB/movies/:id" element={<SingleMovie />} />
        <Route path="/react_movieDB/about" element={<About />} />
        <Route path="/" exact element={<Home />} />
      </Routes> 
      <Footer />
    </Router>
  );
};

export default App;
