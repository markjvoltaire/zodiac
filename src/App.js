import React from 'react';

import './App.css';

import Header from './components/Top/Header';
import Footer from './components/Bottom/Footer';
import Main from './components/Center/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
