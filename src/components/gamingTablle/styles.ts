import styled from "styled-components";

export const GameTable = styled.div`
    width: fit-content;
    padding: 60px;
    border-radius: 8px;
    background-color: #d2d0ca;
    height: 80%;
    border: 4px solid #040433;
    display: grid;
    margin: 3rem auto;
    grid-template-columns: repeat(4, 9rem);
    place-items: center;
    row-gap: 2rem;
`;