import React, { useState, useEffect } from 'react';
import api from '../services/api';

const ModalDesenvolvedor = ({ id, show, onHide, onSave }) => {
  const [nome, setNome] = useState('');
  const [sexo, setSexo] = useState('');
  const [datanascimento, setDatanascimento] = useState('');
  const [hobby, setHobby] = useState('');
  const [nivelId, setNivelId] = useState('');

  useEffect(() => {
    if (show) {
        api.get(`/desenvolvedores/${id}`)
        .then(response => response.data)
        .then(data => {
            setNome(data.nome);
            setSexo(data.sexo);
            setDatanascimento(data.datanascimento);
            setHobby(data.hobby || '');
            setNivelId(data.nivelId);
        })
        .catch(error => console.error('Erro ao carregar detalhes do desenvolvedor:', error));
    }}, [id, show]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para salvar os dados
    onSave({
      nome,
      sexo,
      datanascimento,
      hobby,
      nivelId
    });
    // Fechar o modal após salvar
    onHide();
  };

  return (
      <div className="modal-content">
        <h2>Editar Desenvolvedor</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input
              id="nome"
              type="text"
              className="form-control"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              id="sexo"
              type="text"
              className="form-control"
              value={sexo}
              onChange={(e) => setSexo(e.target.value)}
            />
            <input
              id="datanascimento"
              type="text"
              className="form-control"
              value={datanascimento}
              onChange={(e) => setDatanascimento(e.target.value)}
            />
            <input
              id="hobby"
              type="text"
              className="form-control"
              value={hobby}
              onChange={(e) => setHobby(e.target.value)}
            />
            <input
              id="nivelId"
              type="text"
              className="form-control"
              value={nivelId}
              onChange={(e) => setNivelId(e.target.value)}
            />
          </div>
          <div className="button-group">
            <button type="submit" className="btn btn-primary">Salvar</button>
            <button type="button" className="btn btn-secondary" onClick={onHide}>Cancelar</button>
          </div>
        </form>
      </div>
  );
};

export default ModalDesenvolvedor;
