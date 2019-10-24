import React from 'react';
import './App.css';
import Counter from './Counter';
import CurrentTime from './CurrentTime';

function App() {
  return (
    <div className="App">
      <Counter/>

      <CurrentTime/>
    </div>
  );
}

export default App;
