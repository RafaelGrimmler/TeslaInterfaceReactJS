import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    bottom: 15px;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: ${props=>props.opacity};
    text-align: center;

    & span {
        font-size: 20px;
        color: black;
        font-weight: bold;
    }
`;