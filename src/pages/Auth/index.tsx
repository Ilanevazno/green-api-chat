import { Modal } from "antd";
import React, { ReactElement } from "react";
import { PageDefaultWrapper } from "styles";
import { useAuth } from "./useAuth";
import { Input } from "./styles";

const Auth = (): ReactElement => {
  const { values, handleSubmit, handleChange } = useAuth();

  return (
    <PageDefaultWrapper>
      <Modal
        title="Auth"
        open
        onOk={() => handleSubmit()}
        closable={false}
        centered
      >
        <Input
          value={values.apiTokenInstance}
          onChange={handleChange}
          name="apiTokenInstance"
          id="apiTokenInstance"
          placeholder="enter api token instance..."
        />
        <Input
          value={values.idInstance}
          onChange={handleChange}
          name="idInstance"
          id="idInstance"
          placeholder="enter id instance..."
        />
      </Modal>
    </PageDefaultWrapper>
  );
};

export default Auth;
