import React, { FC } from "react";
import styled from "styled-components";

import Bar from "./Bar";

interface LevelProps {
  title: string;
  logo: string;
  level: number;
}

const Level: FC<LevelProps> = ({ title, logo, level }: LevelProps) => (
  <LevelWrapper>
    <Logo>
      <img src={logo} alt={title} />
    </Logo>
    <Title>{title}</Title>
    <Bar length={level} />
  </LevelWrapper>
);

export default Level;

const LevelWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
`;

const Logo = styled.div`
  width: 100px;
  text-align: right;

  > img {
    width: auto;
    height: 100%;
  }
`;

const Title = styled.div`
  width: 130px;
  margin-left: 15px;
  font-weight: 300;
  font-size: 20px;
`;
