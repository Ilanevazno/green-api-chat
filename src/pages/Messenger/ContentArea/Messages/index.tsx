import React, { ReactElement } from "react";
import { Message, Wrapper, Spinner } from "./styles";
import { RootState } from "store";
import { useAppSelector } from "store/hooks";
import { LoadingOutlined } from "@ant-design/icons";
import { getMessageText } from "./utils";

const Messages = (): ReactElement | null => {
  const { selectedChatData, selectedChat } = useAppSelector(
    ({ messenger }: RootState) => messenger
  );

  if (!selectedChat) {
    return null;
  }

  const chatMessages = selectedChatData[selectedChat?.chatId]
    ? Object.keys(selectedChatData[selectedChat?.chatId])
    : [];

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const chatData = selectedChatData[selectedChat?.chatId];

  return (
    <Wrapper>
      {selectedChat?.chatId &&
        chatMessages?.map((key: string) => (
          <div key={key}>
            <Message type={chatData[key].typeWebhook}>
              {getMessageText(chatData[key])}
              {!chatData[key]?.timestamp && (
                <Spinner indicator={antIcon} size="small" />
              )}
            </Message>
          </div>
        ))}
    </Wrapper>
  );
};

export default Messages;
