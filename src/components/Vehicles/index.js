import React, { useState } from 'react';
import ListVehicles from '../../ListVehicles.json';
import Vehicle from '../Vehicle'

import { Container, LayoutName, LayoutButtonsContainer ,LayoutButtons, Arrow, ArrowIcon } from './styles';

function Vehicles() {

    const [currentVehicle, setCurrentVehicle] = useState(0)
    const [opacity, setOpacity] = useState(1)
    const [arrowAnimationController, setArrowAnimationController] = useState(false)
    const [opacityArrow, setOpacityArrow] = useState(1)
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

      setOpacity(opacityPalette[floatPart.toFixed(1) * 10 - 1])

      // Define opacidade do ArrowIcon
      if( currentView > 0.5 ){
        setOpacityArrow(0)
      }else{
        setOpacityArrow(opacity)
      }

    }

    window.setTimeout(() => {
      setArrowAnimationController(true)
    }, 2500);

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
          <LayoutButtonsContainer opacity={opacity}>
            <LayoutButtons 
              color='#FFFFFF' 
              backgroundColor='#393C41'>
              <a href="https://www.tesla.com/">CUSTOM ORDER</a>
            </LayoutButtons>
            <LayoutButtons 
              color='#393C41'
              backgroundColor='#FFFFFF'>
              <a href="https://www.tesla.com/">EXISTING INVENTORY</a>
            </LayoutButtons>
          </LayoutButtonsContainer>
          <Arrow 
            repeat={arrowAnimationController}
            opacity={opacityArrow}>
            <ArrowIcon />
          </Arrow>
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