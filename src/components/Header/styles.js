import styled from 'styled-components';
import { FaCarSide } from 'react-icons/fa'

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 53px;
  top: 0;
  display: flex;
  justify-content: space-between;
`;

export const LogoIcon = styled(FaCarSide)`
  font-size: 45px;
  color: black;
`;

export const Logo = styled.div`
  width: 100px;
  height: 100%;
  margin-left: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Cars = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 130px;
  
  & span {
    margin: 0 8px ;
    line-height: 21px;
    font-weight: 600;
    color: #181B21;
    cursor: pointer;
    padding: 4px 10px;
    transition: 0.6s;
  }

  & span:hover {
    border-radius: 40px;
    background-color: rgba(240, 240, 240, 0.3);
    transition: 0.6s;
  }

  @media only screen and (max-width: 1200px){
    & {
      display: none;
    }
  }
`;

export const Menu = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;

  & span {
    margin: 0 8px ;
    line-height: 21px;
    font-weight: 600;
    color: #181B21;    
    cursor: pointer;
    padding: 4px 10px;
    transition: 0.6s;
  }

  & span:hover {
    border-radius: 40px;
    background-color: rgba(240, 240, 240, 0.3);
    transition: 0.6s;
  }

  @media only screen and (max-width: 1200px){
    & {
      display: none;
    }
  }
`;

export const ResponsiveMenu = styled.div`
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  margin-right: 50px;

  & span {
    margin: 0 8px ;
    line-height: 21px;
    font-size: 25px;
    font-weight: 600;
    color: #181B21;    
    cursor: pointer;
    padding: 4px 10px;
    transition: 0.6s;
  }

  @media only screen and (max-width: 1200px){
    & {
      display: flex;
    }
  }
`;