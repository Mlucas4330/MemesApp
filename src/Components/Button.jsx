import styled from 'styled-components';

export const Button = styled.button`
    padding: 0.6rem 1rem;
    background-color: black;
    color: white;
    text-decoration: none;
    border-radius: 10px;
    font-weight: 700;
    border: 1px solid white;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: 0.7s;
        transform: scale(1.1);
        cursor: pointer;
    }
`;
