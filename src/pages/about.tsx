import React, { FC } from "react";
import styled from "styled-components";

import BarLine from "components/About/BarLine";
import Level from "components/About/Level";
import Section, { SectionTitle } from "components/About/Section";
import Background from "components/Background";
import LeftMenu from "components/LeftMenu";

const About: FC = () => (
  <>
    <Background color="rgb(239,238,238)" />
    <LeftMenu />
    <Wrapper>
      <Job>Web Frontend Developer</Job>
      <Name>Youngjin Park</Name>
      <Description>
        Hello, I am a web frontend developer working in Mesh Korea. I want to be a developer
        learning about new technology and adapting fastly.
        <br /> My strength is experienced in various fields like Game Client, Web Frontend, Windows
        Application, Android Application. So I think to have a good adaptation.
        <br />
        Thank you.
      </Description>
      <Section mt="80px">
        <SectionTitle title="Work Experience" textAlign="left" />
        <div>
          <WorkExpItem>
            <WorkExpPeriod>2015.09 ~ 2017.06</WorkExpPeriod>
            <WorkExpContent>Software Developer, Republic of Korea Cyber Command</WorkExpContent>
          </WorkExpItem>
          <WorkExpItem>
            <WorkExpPeriod>2017.07 ~ 2020.12</WorkExpPeriod>
            <WorkExpContent>Web Frontend Developer, Mesh Korea</WorkExpContent>
          </WorkExpItem>
          <WorkExpItem>
            <WorkExpPeriod>2021.01 ~</WorkExpPeriod>
            <WorkExpContent>Web Frontend Developer, Naver Z</WorkExpContent>
          </WorkExpItem>
        </div>
      </Section>
      <Section mt="35px">
        <SectionTitle title="Skills" />
        <LevelWrapper>
          <BarLine left="320px" />
          <BarLine left="400px" />
          <BarLine left="480px" />
          <BarLine left="560px" />
          <Level title="React" logo="react.png" level={4.5} />
          <Level title="TypeScript" logo="react.png" level={4.5} />
          <Level title="JavaScript" logo="react.png" level={3.5} />
          <Level title="CSS" logo="react.png" level={3} />
          <Level title="JQuery" logo="react.png" level={2.5} />
          <Level title="C#" logo="react.png" level={2.5} />
          <Level title="Java" logo="react.png" level={2.5} />
        </LevelWrapper>
      </Section>
      <Section mt="60px">
        <SectionTitle title="Contact" textAlign="left" />
        <LinkText>
          <a href="https://www.linkedin.com/in/youngjin-park-a9800b161" target="blank">
            linkedin
          </a>
        </LinkText>
        <LinkText>
          <a href="https://github.com/kand193" target="blank">
            Github
          </a>
        </LinkText>
      </Section>
    </Wrapper>
  </>
);

export default About;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 30px 0;
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

const WorkExpItem = styled.div`
  display: flex;
  margin-bottom: 22px;
  font-size: 14px;
`;

const WorkExpPeriod = styled.div`
  width: 120px;
`;

const WorkExpContent = styled.div`
  flex: 1;
  margin-left: 30px;
`;

const LevelWrapper = styled.div`
  position: relative;
`;

const LinkText = styled.div`
  margin-right: 30px;
  padding-bottom: 3px;
  font-weight: 900;
  font-size: 25px;
  border-bottom: 1px solid black;
  outline: none;
`;
