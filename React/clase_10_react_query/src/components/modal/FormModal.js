import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import React, { useState } from 'react';
import { useAddBand } from '../../hooks/useAddBand';
import { handlerSubmit } from '../../utils/handlerSubmit';
import ModalInput from '../modalInput/ModalInput';
import OpenModal from '../openModal/OpenModal';
import {
  ButtonsContainerStyled,
  InputsContainerStyled,
  ModalContainerStyled,
  ModalDescriptionStyled,
  ModalTitleStyled,
} from './FormModalStyles';

const FormModal = () => {
  const [form, setForm] = useState({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { mutate } = useAddBand();
  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <OpenModal handleOpen={handleOpen}>Open Modal</OpenModal>
      <Modal open={open} onClose={() => handleClose()}>
        <ModalContainerStyled>
          <ModalTitleStyled>React Query Mutations</ModalTitleStyled>
          <ModalDescriptionStyled>
            A continuación vamos a rellenar a un form para poder realizar
            nuestras primeras mutaciones
          </ModalDescriptionStyled>
          <InputsContainerStyled>
            <ModalInput
              type='text'
              name='name'
              label='Nombre de la banda'
              handleChange={handleChange}
            />
            <ModalInput
              type='text'
              name='genre'
              label='Genero musical'
              handleChange={handleChange}
            />
            <ModalInput
              type='text'
              name='lastSong'
              label='Último lanzamiento'
              handleChange={handleChange}
            />
            <ModalInput
              type='number'
              name='listeners'
              label='N° de oyentes'
              placeholder='Completarlo con números'
              handleChange={handleChange}
            />
            <ModalInput
              type='text'
              name='img'
              label='Foto de perfil'
              placeholder='Completarlo con el link de la imagen'
              handleChange={handleChange}
            />
          </InputsContainerStyled>
          <ButtonsContainerStyled>
            <Button
              sx={{ backgroundColor: '#4c1d95' }}
              variant='contained'
              onClick={() => {
                handleClose();
                setForm({});
              }}
            >
              Cancelar
            </Button>
            <Button
              sx={{ backgroundColor: '#4c1d95' }}
              variant='contained'
              onClick={() => {
                handlerSubmit(form)
                  .then(res => {
                    handleClose();
                    setForm({});
                    mutate(res);
                  })
                  .catch(err => alert(err));
              }}
            >
              Enviar
            </Button>
          </ButtonsContainerStyled>
        </ModalContainerStyled>
      </Modal>
    </div>
  );
};

export default FormModal;
