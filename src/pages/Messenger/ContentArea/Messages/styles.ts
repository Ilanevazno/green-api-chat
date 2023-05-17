import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Spin } from "antd";
import { ENotificationTypes } from "entities/contact";

export const Wrapper = styled.div`
  min-height: 80%;
  padding: 0 60px;
`;

interface IMessage {
  type: ENotificationTypes.Outgoing | ENotificationTypes.Incoming;
}

const getMessageStyles = ({ type }: IMessage) => {
  switch (type) {
    case ENotificationTypes.Incoming:
      return css`
        background: #fff;
      `;
    case ENotificationTypes.Outgoing:
      return css`
        background: #d9fdd3;
        margin-left: auto;
      `;
    default:
      return css`
        background: #d9fdd3;
        margin-left: auto;
      `;
  }
};

export const Message = styled.div<IMessage>`
  padding: 9px;
  border-radius: 8px;
  font-size: 14px;
  box-shadow: 0 1px 0.5px rgba(11, 20, 26, 0.13);
  margin-top: 4px;
  width: max-content;
  position: relative;

  ${getMessageStyles}
`;

export const Spinner = styled(Spin)`
  position: absolute;
  right: -30px;
`;
