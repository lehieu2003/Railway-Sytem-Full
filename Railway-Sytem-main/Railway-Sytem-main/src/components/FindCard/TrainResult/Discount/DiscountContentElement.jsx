import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 50px 90px 90px;
`;

export const Item = styled.div`
  border: 1px solid grey;
  padding: 10px;
`;
