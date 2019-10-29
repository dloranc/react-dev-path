import React, { useState, useEffect } from 'react';
import Fetus from './components/Fetus';
import './App.css';

function App() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    window.setTimeout(() => setShow(false), 1)
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {show ? <Fetus/> : null}
      </header>
    </div>
  );
}

export default App;
