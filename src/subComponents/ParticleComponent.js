import React from "react";
import Particles from "react-particles-js";
import styled from "styled-components";

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;

const ParticleComponent = () => {
  return <Box>Particle Component</Box>;
};

export default ParticleComponent;
