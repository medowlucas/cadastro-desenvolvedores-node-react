// Swaper.js
import React, { useState } from 'react';
import Desenvolvedor from '../pages/Desenvolvedor';
import Nivel from '../pages/Nivel';

function Swaper() {
  const [activeCrud, setActiveCrud] = useState('desenvolvedor');

  return (
    <div className="d-flex-vertical justify-content-center">
      <div className="d-flex justify-content-center mb-3 gap-1">
        <button
            className={activeCrud === 'desenvolvedor' ? 'active' : ''}
            onClick={() => setActiveCrud('desenvolvedor')}
          >
          Desenvolvedores
        </button>
        <button
          className={activeCrud === 'nivel' ? 'active' : ''}
          onClick={() => setActiveCrud('nivel')}
        >
          Níveis
        </button>
      </div>
      {activeCrud === 'desenvolvedor' ? <Desenvolvedor /> : <Nivel />}
    </div> 
  );
}

export default Swaper;
