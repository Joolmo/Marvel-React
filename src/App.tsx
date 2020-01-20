import * as React from 'react';
import { useState } from 'react';
import { SplashScreen } from './components'
import './App.css';

const logo = require('./logo.svg');


export default function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  const loadResourcesAsync = async () => {
    await Promise.all([
      new Promise(resolve => setTimeout(resolve, 3000))
    ]);
  }

  const handleLoadingError = (error: any) => {
    console.warn(error);
  }

  const handleFinishLoading = () => {
    setLoadingComplete(true);
  }

  if(!isLoadingComplete) {
    return (
      <SplashScreen
        startAsync={loadResourcesAsync}
        onFinish={handleFinishLoading}
        onError={handleLoadingError}
      />
    )
  } else {
    return (
      <div className="App">
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
}
