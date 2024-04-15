import React, { useState, useEffect } from 'react';
import { Modal, Button, ModalBody, InputGroup, FormControl } from 'react-bootstrap';
import api from '../services/api';

const ModalDesenvolvedor = ({ id, show, onHide, onSave }) => {
  const [nome, setNome] = useState('');
  const [sexo, setSexo] = useState('');
  const [datanascimento, setDatanascimento] = useState('');
  const [hobby, setHobby] = useState('');
  const [nivelId, setNivelId] = useState('');

  useEffect(() => {
    if (show && id) {
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
    const dataNascimentoConvertida = new Date(datanascimento).toISOString().split('T')[0];
    // Lógica para salvar os dados
    onSave({
      nome,
      sexo,
      datanascimento: dataNascimentoConvertida,
      hobby,
      nivelId
    });
    // Fechar o modal após salvar
    onHide();
  };

  return (
    <div className="modal-content">
      <Modal.Header closeButton>
        <Modal.Title>Editar Desenvolvedor</Modal.Title>
      </Modal.Header>
      <ModalBody>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <InputGroup>
              <FormControl
                id="nome"
                placeholder="Nome"
                aria-label="Nome"
                aria-describedby="nome-label"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <InputGroup.Text id="nome-label">Nome</InputGroup.Text>
            </InputGroup>
            <InputGroup>
              <FormControl
                id="sexo"
                placeholder="Sexo"
                aria-label="Sexo"
                aria-describedby="sexo-label"
                value={sexo}
                maxLength={1}
                onChange={(e) => setSexo(e.target.value)}
              />
              <InputGroup.Text id="nome-label">Sexo</InputGroup.Text>
            </InputGroup>
            <InputGroup>
              <FormControl
                id="datanascimento"
                type="date"
                placeholder="Datanascimento"
                aria-label="Datanascimento"
                aria-describedby="datanascimento-label"
                value={datanascimento.split('T')[0]}
                onChange={(e) => setDatanascimento(e.target.value)}
              />
              <InputGroup.Text id="datanascimento-label">Nascimento</InputGroup.Text>
            </InputGroup>
            <InputGroup>
              <FormControl
                id="hobby"
                placeholder="Hobby"
                aria-label="Hobby"
                aria-describedby="hobby-label"
                value={hobby}
                onChange={(e) => setHobby(e.target.value)}
              />
              <InputGroup.Text id="hobby-label">Hobby</InputGroup.Text>
            </InputGroup>
            <InputGroup>
              <FormControl
                id="nivelId"
                type="number"
                placeholder="NivelId"
                aria-label="NivelId"
                aria-describedby="nivelId-label"
                value={nivelId}
                onChange={(e) => setNivelId(e.target.value)}
              />
              <InputGroup.Text id="nivelId-label">ID Nível</InputGroup.Text>
            </InputGroup>
          </div>
          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
              Cancelar
            </Button>
            <Button variant="success" type="submit">
              Salvar
            </Button>
          </Modal.Footer>
        </form>
      </ModalBody>
    </div>
  );
};

export default ModalDesenvolvedor;
