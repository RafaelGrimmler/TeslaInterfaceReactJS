import React from 'react';

import { Container } from './styles';

function Footer({ opacity }) {
  return(
    <Container opacity={opacity}>
        <span>Feito por Rafael Rocha</span>
    </Container>
  );
}

export default Footer;