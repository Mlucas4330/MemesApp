import styled from 'styled-components';

export const MemeStyled = styled.div`
    background-color: #000000b0;
    width: 20rem;
    height: 20rem;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    border: 1px solid black;

    h1 {
        background-color: black;
        width: 100%;
        text-align: center;
    }

    div {
        width: 100%;
        height: 70%;
        position: relative;
    }

    img {
        max-width: 100%;
        max-height: 100%;
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;
