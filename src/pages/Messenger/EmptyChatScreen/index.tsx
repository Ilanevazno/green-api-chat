import { Result } from "antd";
import React, { ReactElement } from "react";
import { Wrapper } from "./styles";

const EmptyChatScreen = (): ReactElement => {
  return (
    <Wrapper>
      <Result title="Select a chat to start chatting" />
    </Wrapper>
  );
};

export default EmptyChatScreen;
