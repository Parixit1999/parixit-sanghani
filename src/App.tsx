import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import './App.css';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';

const EMAIL = 'ps9903@g.rit.edu';

function App() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <div className="app-shell">
      <Header />
      <div className="App">
        <Profile />
      </div>
      <footer className="site-footer">
        <button
          type="button"
          className="site-footer-cta"
          onClick={handleCopyEmail}
          aria-label={copied ? 'Email copied to clipboard' : `Copy email address ${EMAIL}`}
        >
          {copied ? (
            <>
              <Check size={15} aria-hidden="true" /> Email copied!
            </>
          ) : (
            <>
              <Mail size={15} aria-hidden="true" /> Copy email
            </>
          )}
        </button>
        <p className="site-footer-copy">© {new Date().getFullYear()} Parixit Sanghani. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
