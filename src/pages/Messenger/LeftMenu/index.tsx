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
  const { chats } = useAppSelector((state: RootState) => state.messenger);

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

      {Object.keys(chats).map((key: string) => (
        <Contact key={key} data={chats[key]} />
      ))}

      {addingNewContactModalController.isOpen && (
        <AddContactModal onCancel={addingNewContactModalController.dismiss} />
      )}
    </Wrapper>
  );
};

export default LeftMenu;
