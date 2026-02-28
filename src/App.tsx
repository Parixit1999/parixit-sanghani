import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';

function App() {
  return (
    <div className="app-shell">
      <Header />
      <div className="App">
        <Profile />
      </div>
      <footer className="site-footer">
        © {new Date().getFullYear()} Parixit Sanghani. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
