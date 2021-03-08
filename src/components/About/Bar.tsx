import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";

interface BarProps {
  length: number;
}

const Bar: FC<BarProps> = ({ length }: BarProps) => {
  const [barLength, setBarLength] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setBarLength(length);
    }, 100);
  }, [length]);

  return <Wrapper length={barLength} />;
};

export default Bar;

const Wrapper = styled.div<{ length?: number }>`
  position: relative;
  width: ${(props) => (props.length ? `${80 * props.length}px` : "0px")};
  height: 15px;
  background-color: #707070;
  border: 1px solid #5b5b5b;
  border-radius: 8px;
  transition: width 1s;

  &::after {
    position: absolute;
    top: -5px;
    left: -5px;
    width: 100%;
    height: 100%;
    background-color: white;
    border: 1px solid #5b5b5b;
    border-radius: 8px;
    content: "";
  }
`;
