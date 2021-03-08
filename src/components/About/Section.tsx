import React, { FC } from "react";
import styled from "styled-components";

interface SectionTitleProps {
  title: string;
  textAlign?: string;
  width?: string;
}

const SectionTitle: FC<SectionTitleProps> = (props: SectionTitleProps) => (
  <TitleWrapper {...props}>{props.title}</TitleWrapper>
);

const Section = styled.div<{ mt?: string }>`
  display: flex;
  ${(props) => props.mt && `margin-top: ${props.mt};`}
`;

export default Section;
export { SectionTitle };

const TitleWrapper = styled.div<SectionTitleProps>`
  width: ${(props) => props.width || "82px"};
  height: 34px;
  margin-right: 15px;
  padding-right: 15px;
  color: #5b5b5b;
  font-size: 14px;
  text-align: ${(props) => props.textAlign || "right"};
  border-right: 1px solid #707070;
`;
