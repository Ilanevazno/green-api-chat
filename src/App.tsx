import { Global } from "@emotion/react";
import Auth from "pages/Auth";
import React from "react";
import { AppWrapper, GlobalStyle, Header } from "./styles";
import { useAppSelector } from "store/hooks";
import { RootState } from "store";
import Messenger from "pages/Messenger";

function App() {
  const { isAuthenticated } = useAppSelector((state: RootState) => state.auth);

  return (
    <AppWrapper>
      <Global styles={GlobalStyle} />
      <Header />
      {isAuthenticated ? <Messenger /> : <Auth />}
    </AppWrapper>
  );
}

export default App;
