import styled, { keyframes } from 'styled-components';

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
