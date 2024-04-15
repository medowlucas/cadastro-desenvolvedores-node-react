import React, { useState } from 'react';
import { PencilSquare, Trash } from 'react-bootstrap-icons';
import { Modal, Button, ModalBody } from 'react-bootstrap';
import api from '../services/api';
import ModalDesenvolvedor from './ModalDesenvolvedor';

function Opcoes({ itemId, rota, atualizar }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleEdit = (id) => {
    setSelectedItemId(id);
    setShowEditModal(true);
    console.log('showEditModal:', showEditModal);
  };

  const handleDelete = (id) => {
    setSelectedItemId(id);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    api.delete(`/${rota}/${selectedItemId}`)
      .then(response => {
        setShowDeleteModal(false);
        atualizar();
        console.log('Item excluído com sucesso:', response.data);
      })
      .catch(error => {
        alert(error.message);
      });
  };

  return (
    <>
      <PencilSquare
        className='botao-editar me-3'
        title='Editar'
        onClick={() => handleEdit(itemId)}
      />
      <Trash
        className='botao-excluir'
        title='Excluir'
        onClick={() => handleDelete(itemId)}
      />

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <ModalDesenvolvedor id={itemId}  show={showEditModal} onHide={() => setShowEditModal(false)} />
      </Modal>
    
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Exclusão</Modal.Title>
        </Modal.Header>
        <ModalBody>
          Tem certeza de que deseja excluir este item?
        </ModalBody>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Opcoes;
