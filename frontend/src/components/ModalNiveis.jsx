import React, { useState, useEffect } from 'react';
import { Modal, Button, ModalBody, InputGroup, FormControl } from 'react-bootstrap';
import api from '../services/api';

const ModalNiveis = ({ id, show, onHide, onSave }) => {
  const [nivelId, setNivelId] = useState('');
  const [nivel, setNivel] = useState('');

  useEffect(() => {
    if (show && id) {
        api.get(`/niveis/${id}`)
        .then(response => response.data)
        .then(data => {
            setNivelId(data.id);
            setNivel(data.nivel);
        })
        .catch(error => console.error('Erro ao carregar detalhes do desenvolvedor:', error));
    }}, [id, show]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para salvar os dados
    onSave({
      nivel
    });
    // Fechar o modal após salvar
    onHide();
  };

  return (
    <div className="modal-content">
      <Modal.Header closeButton>
        <Modal.Title>Editar Nível</Modal.Title>
      </Modal.Header>
      <ModalBody>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <InputGroup>
              <FormControl
                id="nivelId"
                type="number"
                placeholder="NivelId"
                aria-label="NivelId"
                aria-describedby="nivelId-label"
                value={nivelId||0}
                readOnly
                style={{ color: '#666', backgroundColor: '#f2f2f2' }}
              />
              <InputGroup.Text id="nivelId-label">Id</InputGroup.Text>
            </InputGroup>
            <InputGroup>
              <FormControl
                id="nivel"
                placeholder="Nivel"
                aria-label="Nivel"
                aria-describedby="nivel-label"
                value={nivel}
                onChange={(e) => setNivel(e.target.value)}
              />
              <InputGroup.Text id="nivel-label">Nível</InputGroup.Text>
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

export default ModalNiveis;
