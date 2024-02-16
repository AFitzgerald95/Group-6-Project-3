import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Rewards from './components/Rewards';
import Menu from './components/Menu';
import Navbar from './components/routes/Navbar';
import './App.css';


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;