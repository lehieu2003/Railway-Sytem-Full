import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
  position: relative;
  z-index: 1;
  top: 80px;
  background-color: white;
  border-width: 1px;
  border-color: black;
`;

export const Button = styled.button`
  background: #102f63;
  color: white;
  width: 20%;
  height: 40px;
  cursor: pointer;
  border-radius: 10px 10px 10px 10px;
  border: 2px solid #102f63;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-bottom: 20px;
`;