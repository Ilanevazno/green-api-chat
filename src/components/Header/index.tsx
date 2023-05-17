import React, { ReactElement, ReactNode } from "react";
import { Wrapper } from "./styles";

interface IHeaderProps {
  children: ReactNode;
}

const Header = ({ children }: IHeaderProps): ReactElement => {
  return <Wrapper>{children}</Wrapper>;
};

export default Header;
