import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="App">
        <Portfolio></Portfolio>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
