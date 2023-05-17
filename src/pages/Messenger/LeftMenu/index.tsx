import React, { ReactElement } from "react";
import { Wrapper } from "./styles";
import Header from "components/Header";
import { Button } from "@mui/material";
import AddContactModal from "components/AddContactModal";
import { useModalController } from "hooks/useModalController";
import { useAppSelector } from "store/hooks";
import { RootState } from "store";
import Contact from "./Contact";

const LeftMenu = (): ReactElement => {
  const addingNewContactModalController = useModalController();
  const { contacts } = useAppSelector((state: RootState) => state.contacts);

  return (
    <Wrapper>
      <Header>
        <Button
          onClick={addingNewContactModalController.open}
          variant="outlined"
        >
          Add contact
        </Button>
      </Header>

      {Object.keys(contacts).map((key: string) => (
        <Contact key={key} data={contacts[key]} />
      ))}

      {addingNewContactModalController.isOpen && (
        <AddContactModal onCancel={addingNewContactModalController.dismiss} />
      )}
    </Wrapper>
  );
};

export default LeftMenu;
