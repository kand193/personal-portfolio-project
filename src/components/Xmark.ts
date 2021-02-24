import styled from "styled-components";

const Xmark = styled.div<{top?: string; left?: string;}>`
  position: absolute;
  top: ${(props) => props.top || "0px"};
  left: ${(props) => props.left || "0px"};
  width: 10px;
  height: 10px;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 25px;
    background-color: rgb(88, 83, 63);
    transform: rotateZ(60deg);
    content: "";
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 25px;
    background-color: rgb(88, 83, 63);
    transform: rotateZ(-60deg);
    content: "";
  }
`;

export default Xmark;
