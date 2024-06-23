import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 260px;
  padding-top: 0px;
  gap: 0px;
`;

export const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 70%;
  position: relative;
  z-index: 1;
  top: 80px;
  border-width: 1px;
`;

export const Button = styled.button`
  background: #102f63;
  color: white;
  width: 30%;
  height: 40px;
  cursor: pointer;
  border-radius: 10px 10px 10px 10px;
  border: 2px solid #102f63;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-bottom: 20px;
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
  width: 300px;
  z-index: 1;
  top: 80px;
  border-width: 1px;
  height: 100%;
`;

export const Input = styled.input`
  border: 2px solid #cccccc;
  border-radius: 5px;
  padding: 4px;
  width: 100%;
`;
