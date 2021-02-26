import React, { FC } from "react";
import styled from "styled-components";

import Background from "components/Background";
import Bar from "components/Bar";

const About: FC = () => (
  <>
    <Background color="rgb(239,238,238)" />
    <Wrapper>
      <Job>Web Frontend Developer</Job>
      <Name>Youngjin Park</Name>
      <Description>
        Hello, I am a web frontend developer working in Mesh Korea. I want to be
        a developer learning about new technology and adapting fastly.
        <br /> My strength is experienced in various fields like Game Client,
        Web Frontend, Windows Application, Android Application. So I think to
        have a good adaptation.
        <br />
        Thank you.
      </Description>
      <Bar length={3} />
    </Wrapper>
  </>
);

export default About;

const Wrapper = styled.div`
  margin: 30px auto;
`;

const Job = styled.h2`
  font-size: 20px;
`;

const Name = styled.h1`
  margin: 0;
  font-size: 67px;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 35px;
`;
