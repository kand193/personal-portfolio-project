import styled, { keyframes } from "styled-components";

const SectionBeforeHoverStart = keyframes`
  0% {
    width: 0;
    height: 0;
    background-size: 0 0;
  }

  1% {
    border-top: 2px solid white;
    border-right: 2px solid white;
  }

  50% {
    width: 100%;
    height: 1px;
    background-size: 100% 100%;
    border-top: 2px solid white;
    border-right: 2px solid white;
  }

  100% {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    border-top: 2px solid white;
    border-right: 2px solid white;
  }
`;

const SectionBeforeHoverEnd = keyframes`
  0% {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    border-top: 2px solid white;
    border-right: 2px solid white;
  }

  50% {
    width: 100%;
    height: 1px;
    background-size: 100% 100%;
    border-top: 2px solid white;
    border-right: 2px solid white;
  }

  99% {
    border-top: 2px solid white;
    border-right: 2px solid white;
  }

  100% {
    width: 0;
    height: 0;
    background-size: 0 0;
  }
`;

const TRSection = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 532px;
  height: 263px;
  margin: 0 auto;
  background-color: transparent;
  border-top: 2px solid rgb(88, 83, 63);
  border-right: 2px solid rgb(88, 83, 63);

  &::before {
    position: absolute;
    top: -2px;
    left: 0;
    z-index: 1;
    animation: ${SectionBeforeHoverEnd} 1.2s forwards;
    content: "";
  }

  &:hover::before {
    animation: ${SectionBeforeHoverStart} 1.2s forwards;
  }
`;

export default TRSection;
