import React from 'react';

import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatPandora,
  Header,
} from './containers';

import { CTA, Email, Brand, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Email />
      <WhatPandora />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Brand />
      <Footer />
    </div>
  );
};

export default App;
