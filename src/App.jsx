import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import ProblemStatement from './components/ProblemStatement';
import SolutionSection from './components/SolutionSection';
import FeatureHighlights from './components/FeatureHighlights';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <ProblemStatement />
      <SolutionSection />
      <FeatureHighlights />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default App;
