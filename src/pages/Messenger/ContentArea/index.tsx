import React, { ReactElement, useEffect } from "react";
import { UserName, Wrapper } from "./styles";
import Header from "components/Header";
import ChatInput from "./ChatInput";
import Messages from "./Messages";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { RootState } from "store";
import { subscribeToNotifications } from "store/messenger/slice";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import EmptyChatScreen from "../EmptyChatScreen";

const ContentArea = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { isSubscribedToNotifications, selectedChat } = useAppSelector(
    ({ messenger }: RootState) => messenger
  );

  useEffect(() => {
    !isSubscribedToNotifications && dispatch(subscribeToNotifications());
  }, []);

  return (
    <Wrapper>
      <Header>
        {selectedChat && (
          <>
            <Avatar
              src={selectedChat.avatar}
              size={40}
              icon={<UserOutlined />}
            />
            <UserName>{selectedChat.chatId}</UserName>
          </>
        )}
      </Header>

      {selectedChat ? (
        <>
          <Messages />
          <ChatInput />
        </>
      ) : (
        <EmptyChatScreen />
      )}
    </Wrapper>
  );
};

export default ContentArea;
