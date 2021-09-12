import React from 'react';

import { Container, Logo, LogoIcon, Cars, Menu } from './styles';

function Header() {
  return (
    <Container>
      <Logo>
        <a href="https://www.tesla.com/">
          <LogoIcon />
        </a>
      </Logo>
      <Cars>
        <span>Model S</span>
        <span>Model Y</span>
        <span>Model 3</span>
        <span>Model X</span>
        <span>Solar Roof</span>
      </Cars>
      <Menu>
        <span>Shop</span>
        <span>Account</span>
        <span>Menu</span>
      </Menu>
    </Container>
  );
}

export default Header;