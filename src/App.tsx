import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio'
import CheckImage from './pages/CheckImage';

const App : React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/check-image" element={<CheckImage />} />
      </Routes>
    </Router>
  );
};

export default App;
