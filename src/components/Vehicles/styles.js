import styled, { keyframes } from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io'

export const Container = styled.div`
    overflow-x: hidden;
    height: 100vh;
    scroll-snap-type: y mandatory;
    & div {
    scroll-snap-align: start;
    }
`;

const StartPage = keyframes`
    0%{top: 185px;}
    80%{top: 185px;}
    100%{top: 165px;}
`;

const StartPageSubTitle = keyframes`
    0%{opacity: 0;}
    80%{opacity: 0;}
    100%{opacity: 1;}
`;

const StartPageArrow = keyframes`
    0%{
        bottom: 40px;
        opacity: 0;
    }
    80%{
        bottom: 40px;
        opacity: 0;
    }
    100%{
        bottom: 15px;
        opacity: 1;
    }
`;

const StartPageArrowIcon = keyframes`
    0%{
        bottom: 15px;
    }
    70%{
        bottom: 15px
    }
    80%{
        bottom: 12px;
    }
    90%{
        bottom: 17px;
    }
    100%{
        bottom: 15px;
    }
`;

export const LayoutName = styled.div`
    position: fixed;
    top: 165px;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: ${props=>props.opacity};
    text-align: center;
    animation: ${StartPage} 1.5s;
    

    & h1{
        font-size: 40px;
        color: #393c41;
        line-height: 48px;
    }

    & h2 {
        font-size: 14px;
        color: #5C5D61;
        line-height: 19.8px;
        font-weight: 300;
        animation: ${StartPageSubTitle} 2s;
    }

    & h2 a {
        color: inherit;
        text-underline-position: under;
        transition: color 0.2s;
    }

    & h2 a:hover {
        color: #000;
        font-weight: 500;
    }
`;

export const LayoutButtonsContainer = styled.div`
    position: fixed;
    bottom: 80px;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: ${props=>props.opacity};
    text-align: center;
    height: 40px;
    display: flex;
    animation: ${StartPageSubTitle} 2s;
`;

export const LayoutButtons = styled.div`
    height: 100%;
    width: 255px;
    background-color: ${props=>props.backgroundColor};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 90px;
    margin: 0 12.5px;
    cursor: pointer;

    & a {
        text-decoration: none;
        padding: 12px 20px;
        color: ${props=>props.color};
    }
`;

export const Arrow = styled.div`
    position: fixed;
    bottom: 15px;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: ${props=>props.opacity};
    text-align: center;
    height: 40px;
    display: flex;
    
    animation: ${props => props.repeat ? StartPageArrowIcon : StartPageArrow} ${props => props.repeat ? '2s infinite' : '2.5s'};
    
`;

export const ArrowIcon = styled(IoIosArrowDown)`
    font-size: 40px;
`;

