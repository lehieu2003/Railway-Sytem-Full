import styled from "styled-components";

export const Container = styled.div`
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0px 30px 0px;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  width: 50%;
  max-width: 450px;
  cursor: pointer;
  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }
`;
