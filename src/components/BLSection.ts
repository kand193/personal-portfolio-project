import styled, { keyframes } from "styled-components";

const SectionBeforeHoverStart = keyframes`
  0% {
    width: 0;
    height: 0;
    background-size: 0 0;
  }

  1% {
    border-bottom: 2px solid white;
    border-left: 2px solid white;
  }

  50% {
    width: 0;
    height: 100%;
    background-size: 100% 100%;
    border-bottom: 2px solid white;
    border-left: 2px solid white;
  }

  100% {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    border-bottom: 2px solid white;
    border-left: 2px solid white;
  }
`;

const SectionBeforeHoverEnd = keyframes`
  0% {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    border-bottom: 2px solid white;
    border-left: 2px solid white;
  }

  50% {
    width: 0;
    height: 100%;
    background-size: 100% 100%;
    border-bottom: 2px solid white;
    border-left: 2px solid white;
  }

  99% {
    border-bottom: 2px solid white;
    border-left: 2px solid white;
  }

  100% {
    width: 0;
    height: 0;
    background-size: 0 0;
  }
`;

const BLSection = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 752px;
  height: 149px;
  margin: 0 auto;
  background-color: transparent;
  border-bottom: 2px solid rgb(88, 83, 63);
  border-left: 2px solid rgb(88, 83, 63);

  &::before {
    position: absolute;
    top: 0;
    left: -2px;
    z-index: 1;
    animation: ${SectionBeforeHoverEnd} 1.2s;
    content: "";
  }

  &:hover::before {
    animation: ${SectionBeforeHoverStart} 1.2s forwards;
  }
`;

export default BLSection;
