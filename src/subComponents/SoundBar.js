import React, { useState } from "react";
import { useRef } from "react/cjs/react.development";
import styled from "styled-components";
import music from "../assets/audio/stay-lost-with-me_by_reed-pittman_Artlist.mp3";

const Box = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  left: 8rem;
  top: 3rem;
  z-index: 10;
`;

const SoundBar = () => {
  const ref = useRef(null);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);

    if (!click) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  return (
    <Box onClick={() => handleClick()}>
      Sound
      <audio src={music} ref={ref} loop />
    </Box>
  );
};

export default SoundBar;
