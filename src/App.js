import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Universities from './components/Universities';
import ApplicationForm from './components/ApplicationForm';
import UserProfile from "./components/UserProfile";
import Courses from "./components/Courses";
import Login from "./components/Login";
import Registration from "./components/Registration";

const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();

const PORT = config.get('port') || 3000


async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (e) {
    console.log('Server error', e.message)
    process.exit(1)
  }
}




const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

function App() {
  return (
      <Router>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Hero/>}></Route>
              <Route path="/features" element={<Features/>}></Route>
              <Route path="/pricing" element={<Pricing/>}></Route>
              <Route path="/universities" element={<Universities/>}></Route>
              <Route path="/applicationForm" element={<ApplicationForm/>}></Route>
              <Route path="/userProfile" element={<UserProfile/>}></Route>
              <Route path="/courses" element={<Courses/>}></Route>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/registration" element={<Registration/>}></Route>
          </Routes>
        </Container>
        <Footer />
      </Router>
  );
}

export default App;
