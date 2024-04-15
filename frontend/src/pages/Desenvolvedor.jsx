import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from 'react';
import api from '../services/api';
import Opcoes from '../components/Opcoes';
import Adicionar from '../components/Adicionar';

function formatDate(isoDate) {
  return new Date(isoDate).toLocaleString('pt-BR', {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function Desenvolvedor() {
  const [desenvolvedores, setDesenvolvedores] = useState([]);

  const atualizarDesenvolvedores = () => {
    api.get('desenvolvedores')
      .then(response => setDesenvolvedores(response.data))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    atualizarDesenvolvedores();
  }, []);

  return (
    <div className='d-flex justify-content-center gap-2'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sexo</th>
            <th>Data de Nascimento</th>
            <th>Idade</th>
            <th>Hobby</th>
            <th>Nível</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {desenvolvedores.map(dev => (
            <tr key={dev.id}>
              <td>{dev.nome}</td>
              <td>{dev.sexo}</td>
              <td>{formatDate(dev.datanascimento)}</td>
              <td>{dev.idade}</td>
              <td>{dev.hobby}</td>
              <td>{dev.Level.nivel}</td>
              <td>
                <Opcoes itemId={dev.id} rota={'desenvolvedores'} atualizar={atualizarDesenvolvedores} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Adicionar rota={'desenvolvedores'} atualizar={atualizarDesenvolvedores} />
    </div>
  );
}

export default Desenvolvedor;
