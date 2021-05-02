import React, { FC } from "react";
import styled from "styled-components";

const LeftMenu: FC = () => (
  <Wrapper>
    <BarImage src="/bar.png" />
    <StarImage src="/star.png" />
  </Wrapper>
);

export default LeftMenu;

const Wrapper = styled.div`
  position: absolute;
  top: 100px;
  right: calc(90% + 80px);
  width: 57px;
`;

const BarImage = styled.img`
  position: absolute;
  top: 7px;
  left: 0;
  width: 57px;
  height: 1px;
`;

const StarImage = styled.img`
  position: absolute;
  top: 0;
  left: 30px;
  width: 15px;
  height: 15px;
`;
