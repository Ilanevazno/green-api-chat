import React, {
  ReactElement,
  useState,
  ChangeEvent,
  KeyboardEvent,
} from "react";
import { Wrapper } from "./styles";
import { Input } from "antd";
import { useAppDispatch } from "store/hooks";
import { sendMessage } from "store/messenger/slice";

const { TextArea } = Input;

const ChatInput = (): ReactElement => {
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState<string>("");

  const handleChangeTextArea = (
    event: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>): void => {
    if (event.key === "Enter") {
      event.preventDefault();

      dispatch(sendMessage(message));
      setMessage("");
    }
  };

  return (
    <Wrapper>
      <TextArea
        onChange={handleChangeTextArea}
        onKeyDown={handleKeyDown}
        value={message}
        placeholder="Enter message"
        autoSize={{ minRows: 1, maxRows: 3 }}
      />
    </Wrapper>
  );
};

export default ChatInput;
