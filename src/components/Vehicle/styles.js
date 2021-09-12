import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  & img {
    width: 100%;
    background-image: url(${props => props.src});
    background-size: cover;
  }

  @media only screen and (max-width: 1800px){
    & img{
      height: 100%;
    }
  }
`;
