import styled from "styled-components";

const BarLine = styled.div<{ left: string }>`
  position: absolute;
  left: ${(props) => props.left};
  width: 0;
  height: 100%;
  border-left: 1px dashed #707070;
`;

export default BarLine;
