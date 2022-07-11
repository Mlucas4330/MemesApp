import styled from 'styled-components';

export const Form = styled.form`
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 1rem;
    border-radius: 10px;
    border: 1px solid black;
    width: 25rem;
    margin-top: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;

    @media (max-width: 768px) {
        width: 20rem;
    }

    input[type='text'] {
        padding: 1rem 0.5rem;
        border-radius: 5px;
        width: 90%;
        border: 1px solid rgba(0, 0, 0, 0.534);
    }

    input[type='text']:invalid {
        border: 1px solid rgb(255, 54, 54);
    }

    input[type='text']:valid {
        border: 1px solid rgb(41, 211, 55);
    }

    input[type='text']:focus {
        border: 1px solid #3474ff;
        outline: none;
    }

    input[type='file'] {
        margin: 1rem;
    }

    .close {
        position: absolute;
        top: 15px;
        right: 15px;
        font-weight: 700;
        cursor: pointer;
    }

    .close:hover {
        text-decoration: underline;
    }
`;
