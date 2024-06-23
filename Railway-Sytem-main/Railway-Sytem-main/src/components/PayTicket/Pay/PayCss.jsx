import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 80%;
  position: relative;
  z-index: 1;
  top: 80px;
  padding: 20px;
  border: 1px solid black;
  margin: 0 auto;
  flex-direction: column;
  border-top: none;
`;

export const Item = styled.div`
  border: 0.1px solid grey;
  padding: 10px;
`;

export const Input = styled.input`
  border: 2px solid #cccccc;
  border-radius: 5px;
  padding: 4px;
  width: 50%;
`;
