import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="App">
        <Profile />
      </div>
    </div>
  );
}

export default App;
