import React, { ReactElement } from "react";
import { Wrapper } from "./styles";
import LeftMenu from "./LeftMenu";
import ContentArea from "./ContentArea";

const Messenger = (): ReactElement => {
  return (
    <Wrapper>
      <LeftMenu />
      <ContentArea />
    </Wrapper>
  );
};

export default Messenger;
