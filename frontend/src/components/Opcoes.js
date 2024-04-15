import React, { useState } from 'react';
import { PencilSquare, Trash } from 'react-bootstrap-icons';
import { Modal, Button, ModalBody } from 'react-bootstrap';
import api from '../services/api';

function Opcoes({ itemId, rota }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleEdit = (id) => {
    setSelectedItemId(id);
    setShowEditModal(true);
  };

  const handleDelete = (id) => {
    setSelectedItemId(id);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    api.delete(`/${rota}/${selectedItemId}`)
      .then(response => {
        setShowDeleteModal(false);
        console.log('Item excluído com sucesso:', response.data);
      })
      .catch(error => {
        alert(error.message);
      });
  };

  return (
    <>
      <PencilSquare
        className='me-3'
        title='Editar'
        style={{ color: '#007bff' }}
        onClick={() => handleEdit(itemId)}
      />
      <Trash
        title='Excluir'
        style={{ color: '#dc3545' }}
        onClick={() => handleDelete(itemId)}
      />

      {/* Modal de edição */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <ModalBody>
            <input />    
        </ModalBody>
      </Modal>

      {/* Modal de confirmação de exclusão */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Exclusão</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tem certeza de que deseja excluir este item?
        </Modal.Body>
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
