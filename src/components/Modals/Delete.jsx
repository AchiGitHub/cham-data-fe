import React from "react";
import Modal from "styled-react-modal";
import { ButtonWrapper } from "../Common/ActionButton/styles";
import { Inputs } from "./styles";

const DeleteModal = ({ playerName, modalOpen, deleteCard, setModalOpen }) => {

  function toggleModal(e) {
    setModalOpen(!modalOpen);
  }

  return (
    <StyledModal
      isOpen={modalOpen}
      onEscapeKeydown={toggleModal}
      className="modal-body"
      opacity={1}
      backgroundProps={{ opacity: 1 }}
    >
        <Inputs style={{ textAlign: 'center' }}>
            <label>{`Delete ${playerName.newPlayer}?`}</label>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '220px' }}>
                <ButtonWrapper style={{ backgroundColor: '#efefef', color: 'black' }} onClick={() => setModalOpen(false)}>
                    Cancel
                </ButtonWrapper>
                <ButtonWrapper style={{ backgroundColor: '#9C254D' }} onClick={() => deleteCard()}>
                    Submit
                </ButtonWrapper>
            </div>
        </Inputs>
    </StyledModal>
  );
};

export default DeleteModal;

const StyledModal = Modal.styled`
  width: 20rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;
`;
