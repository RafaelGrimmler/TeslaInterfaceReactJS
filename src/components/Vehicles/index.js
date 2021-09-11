import React, { useState } from 'react';
import ListVehicles from '../../ListVehicles.json';
import Vehicle from '../Vehicle'

import { Container, LayoutName } from './styles';

function Vehicles() {

    const [currentVehicle, setCurrentVehicle] = useState(0)
    const [opacity, setOpacity] = useState(1)
    const opacityPalette = [0.9,0.7,0.4,0.2,0,0,0.2,0.4,0.7,0.9]

    const scroll = e => {

      const currentView = e.target.scrollTop / e.target.clientHeight
      const remainder = e.target.scrollTop % e.target.clientHeight

      const integerPart = parseInt(currentView)
      const floatPart = currentView - integerPart;

      if(Math.round(currentView) !== currentVehicle){
        setCurrentVehicle(Math.round(currentView))
      }

      if(remainder === 0){
        setOpacity(1)
        return
      }

      // Define a opacidade com base na paleta de opacidade
      setOpacity(opacityPalette[floatPart.toFixed(1) * 10 - 1])
    }

    return (
      <Container onScroll={scroll}>
        <div >
          <LayoutName opacity={opacity}>
              <h1>{ListVehicles[currentVehicle].name}</h1>
              <h2>
                {ListVehicles[currentVehicle].text}
                <a href="https://www.tesla.com/">
                  {ListVehicles[currentVehicle].link ? ListVehicles[currentVehicle].link :  ''}
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