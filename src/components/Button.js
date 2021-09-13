import styled from "styled-components";

export const ButtonContainer = styled.button`
    font-size : 1.4 rem;
    background : transparent;
    color : var(--darkGreen);
    border: 1px solid var(--darkGreen);
    border-radius : 10px;
    &:hover{
        background : var(--lightGreen);
        color : var(--lightGrey);
    }
`;