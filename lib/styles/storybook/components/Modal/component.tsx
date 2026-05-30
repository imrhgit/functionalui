import { Button } from "functionalui/button";
import { Modal } from "functionalui/modal";
import { Text_Header } from "functionalui/texts/header";
import { ModalStyles } from "functionalui/types";
import { useState } from "react";

const Component = () => {
  const [showModal, setShowModal] = useState(false);
  function handleOpenModal() {
    setShowModal(true);
  }
  function handleCloseModal() {
    setShowModal(false);
  }
  return (
    <>
      <Button name="Open modal" clickAction={() => handleOpenModal()} />
      <Modal
        showModal={showModal}
        closeModal={() => handleCloseModal()}
        modalStyles={ModalStyles.Nocard}
      >
        <form>
          <Text_Header header="h1">Form modal</Text_Header>
        </form>
      </Modal>
    </>
  );
};

export default Component;
