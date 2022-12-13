import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Container } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Login from './components/auth/Login';

const theme = createTheme();

function Application() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header />
          <Routes>
            <Route exact path="/" element={<Navigate to="/articles" />} />
            <Route exact path="/articles" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </Container>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default Application;
