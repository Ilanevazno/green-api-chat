import { IContact } from "entities/contact";
import React, { ReactElement } from "react";
import { Info, Wrapper } from "./styles";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useAppDispatch } from "store/hooks";
import { selectChat } from "store/messenger/slice";

interface IContactProps {
  data: IContact;
}

const Contact = ({ data }: IContactProps): ReactElement => {
  const dispatch = useAppDispatch();
  const handleSelectContact = (): void => {
    dispatch(selectChat(data));
  };

  return (
    <Wrapper onClick={handleSelectContact}>
      <Avatar src={data.avatar} size={40} icon={<UserOutlined />} />
      <Info>{data.chatId}</Info>
    </Wrapper>
  );
};

export default Contact;
