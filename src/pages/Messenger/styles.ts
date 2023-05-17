import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 1% 3%;
  box-shadow: 0 6px 18px rgba(11, 20, 26, 0.05);
  background: #f0f2f5;
  position: relative;
  display: flex;
  height: 95%;

  @media (max-width: 1280px) {
    margin: 0;
    height: 100%;
  }
`;
