import { Formik } from "formik";
import React from "react";
import { useContext } from "react";
import Modal from "styled-react-modal";
import { createCard } from "../../api/PlayerCards";
import { PlayerContext } from "../../context/Players";
import { ButtonWrapper } from "../Common/ActionButton/styles";
import { Input, InputGroup, InputRow } from "./styles";

const AddModal = ({ modalOpen, setModalOpen }) => {

  const { addPlayer } = useContext(PlayerContext);

  function toggleModal(e) {
    setModalOpen(!modalOpen);
  }

  const handleAddCard = async (values) => {
    try {
      const resp = await createCard(values);
      addPlayer(!!resp ? resp : values);
      setModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <StyledModal
      isOpen={modalOpen}
      onEscapeKeydown={toggleModal}
      className="modal-body"
      opacity={1}
      backgroundProps={{ opacity: 1 }}
    >
      <Formik
        initialValues={{ swapReason: '', swapTime: '', oldPlayer: '', newPlayer: '' }}
        onSubmit={(values, { setSubmitting }) => {
          handleAddCard(values)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <InputGroup>
              <InputRow>
                <label>Swap Reason</label>
              </InputRow>
              <Input
                name="swapReason"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.swapReason}
              />
            </InputGroup>
            <InputGroup>
              <InputRow>
                <label>Swap Time</label>
              </InputRow>
              <Input
                name="swapTime"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.swapTime}
              />
            </InputGroup>
            <InputGroup>
              <InputRow>
                <label>Old Player</label>
              </InputRow>
                <Input
                  name="oldPlayer"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.oldPlayer}
                />
            </InputGroup>
            <InputGroup>
              <InputRow>
                <label>New Player</label>
              </InputRow>
              <Input
                name="newPlayer"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.newPlayer}
              />
            </InputGroup>
            <InputGroup style={{ display: 'flex', justifyContent: 'space-between' }}>
              <ButtonWrapper onClick={() => setModalOpen(false)} style={{ color: "#000", backgroundColor: "#efefef" }}>
                Cancel
              </ButtonWrapper>
              <ButtonWrapper type="submit" disabled={isSubmitting}>
                Submit
              </ButtonWrapper>
            </InputGroup>
          </form>
        )}
      </Formik>
    </StyledModal>
  );
};

export default AddModal;

const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;
`;
