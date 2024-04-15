import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from 'react';
import api from '../services/api';
import Opcoes from '../components/Opcoes';

function Nivel() {
  const [niveis, setNiveis] = useState([]);

  useEffect(() => {
    api.get('niveis')
      .then(response => setNiveis(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
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
              <Opcoes itemId={nivel.id} rota={'niveis'} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Nivel;
