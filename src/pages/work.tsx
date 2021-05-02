import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";

import Background from "components/Background";

const TITLE_HEIGHT = 440;

const Work: FC = () => {
  const [isFixedImage, setIsFixedImage] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset > TITLE_HEIGHT) {
        setIsFixedImage(false);
      } else {
        setIsFixedImage(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Wrapper>
      <Background color="#fdef8d" />
      <TitleWrapper>
        <HiddenTitle>
          <Period>june 2018 - july 2018</Period>
          <Title>
            STORE
            <br />
            MARKETING PAGE
          </Title>
        </HiddenTitle>
      </TitleWrapper>
      <Thumbnail isFixed={isFixedImage}>
        <img src="/work_thumbnail.png" />
      </Thumbnail>
    </Wrapper>
  );
};
export default Work;

const Wrapper = styled.div`
  height: 3000px;
`;

const TitleWrapper = styled.div`
  position: relative;
  width: 100%;
  height: ${TITLE_HEIGHT * 2}px;
`;

const HiddenTitle = styled.div`
  position: absolute;
  top: 50%;
  margin-top: 150px;
  margin-left: 50px;
`;

const Period = styled.div`
  font-size: 20px;
`;

const Title = styled.div`
  margin-top: 40px;
  font-size: 50px;
  line-height: 1.5;
`;

const Thumbnail = styled.div<{ isFixed?: boolean }>`
  ${(props) =>
    props.isFixed &&
    `
    position: fixed;
    top: ${TITLE_HEIGHT}px;
    left: 50%;
    transform: translateX(-50%);
  `}
  width: 100%;
  height: auto;
  z-index: 100;

  > img {
    width: 100%;
    height: 100%;
  }
`;
