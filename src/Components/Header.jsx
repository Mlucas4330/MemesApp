import styled from 'styled-components';

export const Header = styled.header`
    background-color: black;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    padding: 1rem;

    h1 {
        font-size: 1.5rem;
    }

    @media (max-width: 768px) {
        justify-content: space-between;
    }
`;
