import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes.js";
import { motion } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";

import { Work } from "../data/WorkData";
import Card from "../subComponents/Card.js";
import { YinYang } from "./AllSvgs.js";
import BigTitle from "../subComponents/BigTitle.js";
import { useMedia } from "use-media";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};

  height: 300vh;
  position: relative;
  display: flex;
  align-items: center;

  @media screen and (max-width: 425px) {
    height: 350vh;
  }
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;

  color: white;
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
  @media screen and (max-width: 425px) {
    width: 60px;
    height: 60px;
  }
`;

//motionの設定
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WarkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);

  const media = useMedia({ maxWidth: "425px" });

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      yinyang.current.style.transform =
        "rotate(" + -window.pageYOffset + "deg)";
    };

    window.addEventListener("scroll", rotate);

    return () => window.removeEventListener("scroll", rotate);
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>
        <Rotate ref={yinyang}>
          <YinYang
            width={media ? 60 : 80}
            height={media ? 60 : 80}
            fill={DarkTheme.text}
          />
        </Rotate>
        <BigTitle text="WORK" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default WarkPage;
