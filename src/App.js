import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Explore_container from './Component/Explore_container';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import Login from './Component/Login';
import Service from './Component/Service';
import About from './Component/About';
import Community from './Component/Community';
import Bmi from './Component/Bmi';

const AppContent = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/program" element={<Explore_container />} />
      <Route path="/service" element={<Service />} />
      <Route path="/about" element={<About />} />
      <Route path="/community" element={<Community />} />
      <Route path="/login" element={<Login />} />
      <Route path="/bmi" element={<Bmi />} />

    </Routes>
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;
