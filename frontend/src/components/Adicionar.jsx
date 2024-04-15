import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import api from '../services/api';
import ModalDesenvolvedor from './ModalDesenvolvedor';
import ModalNiveis from './ModalNiveis';

function Adicionar({ rota, atualizar }) {
  const [showSaveModal, setShowSaveModal] = useState(false);

  const handleSave = () => {
    setShowSaveModal(true);
  };

  const handlePostSave = (body) => {
    api.post(`/${rota}`, body)
      .then(response => {
        setShowSaveModal(false);
        atualizar();
        console.log('Item inserido com sucesso:', response.data);
      })
      .catch(error => {
        alert(error.message);
      });
  };

  return (
    <>
      <Button variant="success" style={{ maxHeight: '40px', maxWidth: '130px' }} onClick={handleSave}>
        <p>+Adicionar</p>
      </Button>
      {`${rota}` === 'desenvolvedores' ? (
        <Modal show={showSaveModal} onHide={() => setShowSaveModal(false)}>
          <ModalDesenvolvedor show={showSaveModal} onHide={() => setShowSaveModal(false)} onSave={handlePostSave} />
        </Modal>
      ) : (
        <Modal show={showSaveModal} onHide={() => setShowSaveModal(false)}>
          <ModalNiveis show={showSaveModal} onHide={() => setShowSaveModal(false)} onSave={handlePostSave} />
        </Modal>
      )}
    </>
  );
}

export default Adicionar;
