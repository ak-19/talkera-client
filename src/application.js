import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Container } from "@mui/material";

import Home from './components/home/Home';

function Application() {
  return (
    <Router>
      <Container maxwidth="xl">
        
        <Routes>
          <Route exact path="/" element={<Navigate to="/articles" />} />
          <Route exact path="/articles" element={<Home />} />
          
        </Routes>
        
      </Container>
    </Router>
  );
}

export default Application;
