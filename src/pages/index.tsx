import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";

import Background from "components/Background";
import BLSection from "components/Index/BLSection";
import TRSection from "components/Index/TRSection";
import Xmark from "components/Index/Xmark";

const IndexPage: FC = () => (
  <>
    <Background color="rgb(37, 45, 38)" />
    <Wrapper>
      <TRSection>
        <TRText>work</TRText>
        <Xmark left="530px" top="240px" />
      </TRSection>
      <Link href="/about">
        <BLSection>
          <BLText>about me</BLText>
          <Xmark left="-2px" top="-5px" />
        </BLSection>
      </Link>
      <Title>Web Frontend Developer</Title>
      <br />
      <Name>Youngjin Park</Name>
    </Wrapper>
  </>
);

export default IndexPage;

const Wrapper = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  width: 800px;
  height: 300px;
  transform: translate(-50%, -50%);
`;

const Title = styled.div`
  z-index: 10;
  color: white;
  font-size: 28px;
`;

const Name = styled.div`
  z-index: 10;
  color: white;
  font-size: 90px;
`;

const TRText = styled.div`
  position: absolute;
  right: -40px;
  bottom: 30px;
  color: rgb(88, 83, 63);
  transform: rotateZ(90deg);
`;

const BLText = styled.div`
  position: absolute;
  top: 40px;
  left: -50px;
  color: rgb(88, 83, 63);
  transform: rotateZ(270deg);
`;
