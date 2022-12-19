import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Container } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Login from './features/authentication/Login';
import SignUp from './features/authentication/Signup';
import Feed from './features/articles/list/Feed';
import ArticleDetails from './features/articles/Articledetails';
import Createarticle from './features/articles/create/Createarticle';

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
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/feed" element={<Feed />} />
            <Route exact path="/add" element={<Createarticle />} />
            <Route exact path="/article/:id" element={<ArticleDetails />} />
          </Routes>
        </Container>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default Application;
