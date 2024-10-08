import React from 'react';
import Navbar from './navbar';
import MainContent from './MainContent';
import CollagenSection from './CollagenSection'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <CollagenSection/>
    </div>
  );
}

export default App;


