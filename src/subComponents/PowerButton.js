// Home Button

import React from "react";
import styled from "styled-components";

const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);

  background-color: #fcf6f4;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.5rem;
  height: 2.5rem;
`;

const PowerButton = () => {
  return <Power>Home</Power>;
};

export default PowerButton;
