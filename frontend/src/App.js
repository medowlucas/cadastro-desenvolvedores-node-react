import React from 'react';
import Header from './components/Header';
import Swaper from './components/Swaper';

function App() {
  return (
    <div className="container mt-4">
      <div className="card">
        <div className='d-flex justify-content-center mt-3'>
          <Header />
        </div>
        <div className="card-body d-flex justify-content-center">
          <Swaper />
        </div>
      </div>
    </div>
  );
}

export default App;
