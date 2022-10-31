import React, { Suspense } from 'react';
import './App.css';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Suspense fallback={null} >
        <Home />
      </Suspense>

    </div>
  );
}

export default App;
