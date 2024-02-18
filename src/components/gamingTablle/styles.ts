import styled from "styled-components";

export const GameTable = styled.div`
  width: fit-content;
  padding: 60px;
  border-radius: 8px;
  background-color: rgba(210, 208, 202, 0.44);
  border: 4px solid #040433;
  display: grid;
  margin: 3rem auto;
  grid-template-columns: repeat(4, 9rem);
  place-items: center;
  row-gap: 2rem;
`;
