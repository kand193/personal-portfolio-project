import React, { FC } from "react";
import styled from "styled-components";

const IndexPage: FC = () => (
  <Wrapper>
    <TRSection></TRSection>
  </Wrapper>
);

export default IndexPage;

const Wrapper = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TRSection = styled.div`
  position: relative;
  width: 820px;
  height: 500px;
  margin: 0 auto;
  background-color: transparent;
  border-top: 2px solid rgb(88, 83, 63);
  border-right: 2px solid rgb(88, 83, 63);

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 0;
    height: 0;
    background-image: url("https://blog.krafton.com/wp-content/uploads/2020/04/GameOn_healing_01.png");
    border: 2px solid transparent;
    content: "";
  }

  &:hover::before {
    width: 100%;
    height: 100%;
    border-top-color: white;
    border-right-color: white;
    transition: width 0.5s ease-out, height 0.5s ease-out 0.5s;
  }

  &::after {
    position: absolute;
    top: -1px;
    left: -1px;
    z-index: 3;
    width: 0;
    height: 0;
    border-right: 823px solid transparent;
    border-bottom: 503px solid rgb(37, 45, 38);
    content: "";
  }
`;
