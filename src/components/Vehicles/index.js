import React, { useState } from 'react';
import ListVehicles from '../../ListVehicles.json';
import Vehicle from '../Vehicle'

import { Container, LayoutName } from './styles';

function Vehicles() {

    const [currentVehicle, setCurrentVehicle] = useState(ListVehicles[0])

    return (
      <Container>
        <div>
          <LayoutName>
              <h1>{currentVehicle.name}</h1>
              <h2>
                {currentVehicle.text}
                <a href="https://www.tesla.com/" target="_blank">
                  {currentVehicle.link ? currentVehicle.link :  ''}
                  </a>
              </h2>
          </LayoutName>
          {
              ListVehicles.map((item, key)=>
                <Vehicle key={key} src={item.src} />
              )
          }
        </div>
      </Container>
  );
}

export default Vehicles;