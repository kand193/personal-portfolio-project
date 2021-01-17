import React, { FC } from "react";
import styled from "styled-components";

const Container: FC = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Container;

const Wrapper = styled.div`
  width: 90%;
  max-width: 1600px;
  height: 100%;
  margin: 0 auto;
`;
