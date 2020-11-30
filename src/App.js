import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [variant, setVariant] = useState(0);

  useEffect(() => {
    (async function abTest() {
      if (window.dataLayer) {
        await window.dataLayer.push({ event: 'optimize.activate' });
      }
      this.intervalId = setInterval(() => {
        if (window.google_optimize !== undefined) {
          const variant = window.google_optimize.get('o30slX_MQROZiJYFguu9Mg');
          setVariant({ variant });
          clearInterval(this.intervalId);
        }
    }, 100);
    })();
  }, []);

  return (
    <div className="App">
      <div>Variant: {`${variant}`}</div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
