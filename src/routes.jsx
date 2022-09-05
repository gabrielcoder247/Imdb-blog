import React from 'react'
import BarChart  from './components/chart'
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function Routers() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/chart" element={<BarChart/>} />
        </Routes>
      </Router>
    );
  }

  export default Routers;