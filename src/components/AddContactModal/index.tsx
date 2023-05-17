import { Input, Modal } from "antd";
import React, { ReactElement } from "react";
import { useAddContact } from "./useAddContact";

interface IAddContactModalProps {
  onCancel: () => void;
}

const AddContactModal = ({ onCancel }: IAddContactModalProps): ReactElement => {
  const { values, handleChange, handleSubmit } = useAddContact();

  const handleAddContact = (): void => {
    handleSubmit();
    onCancel();
  };

  return (
    <Modal
      title="Add new contact"
      open
      onOk={handleAddContact}
      centered
      onCancel={onCancel}
    >
      <Input
        value={values.phone}
        onChange={handleChange}
        name="phone"
        id="phone"
        placeholder="Enter phone"
      />
    </Modal>
  );
};

export default AddContactModal;
