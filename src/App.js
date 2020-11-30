import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import logoGreen from './logoGreen.svg';
import './App.css';

function App() {
  const [variant, setVariant] = useState('0');

  useEffect(() => {
    async function abTest() {
      if (window.dataLayer) {
        await window.dataLayer.push({ event: 'optimize.activate' });
      }

      const intervalId = setInterval(() => {
        if (window.google_optimize !== undefined) {
          const variant = window.google_optimize.get('o30slX_MQROZiJYFguu9Mg');
          setVariant(variant);
          clearInterval(intervalId);
        }
      }, 100);
    }

    abTest();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {variant === '1'
          ? <img src={logoGreen} className="App-logo App-logo--revert" alt="logo-green" />
          : <img src={logo} className="App-logo" alt="logo" />
        }
        <h1>
          {variant === '1'
            ? 'You see NEW version page'
            : 'You see ORIGINAL version page'
          }
        </h1>
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
