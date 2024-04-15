import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from 'react';
import api from '../services/api';
import Opcoes from '../components/Opcoes';
import Adicionar from '../components/Adicionar';

function Nivel() {
  const [niveis, setNiveis] = useState([]);

  const atualizarNiveis = () => {
    api.get('niveis')
      .then(response => setNiveis(response.data))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    atualizarNiveis();
  }, []);

  return (
    <div className='d-flex justify-content-center gap-2'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nível</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {niveis.map(nivel => (
            <tr key={nivel.id}>
              <td>{nivel.id}</td>
              <td>{nivel.nivel}</td>
              <td>
                <Opcoes itemId={nivel.id} rota={'niveis'} atualizar={atualizarNiveis} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Adicionar rota={'niveis'} atualizar={atualizarNiveis} />
    </div>
  );
}

export default Nivel;
