import React from 'react';
import { Container } from './styles';

function Vehicles({ src }) {
  return (
      <Container>
        <img src={src} alt='backgroundVehicles' />
      </Container>
  );
}

export default Vehicles;

