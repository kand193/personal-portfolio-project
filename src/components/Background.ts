import styled from "styled-components";

const Background = styled.div<{ color?: string;}>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.color || "white"};
`;

export default Background;
