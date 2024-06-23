import styled from "styled-components";

export const Container = styled.div`
  background-image: url("headerBackground.jpg");
  background-position: center;
  background-size: cover;

  display: flex;
  align-items: center;
  padding: 120px 0px 40px 0px;
  /* justify-content: space-between; */
  /* flex-direction: row; */
  margin: 0 auto;
  width: 100%;
  height: 70vh;
  gap: 20px;
  position: relative;
  z-index: 1;
  top: 80px;
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
  align-items: center;
  text-align: center;
  padding: 0px 5px 0px 5px;
  color: #fff;
  font-size: 2rem;
`;

export const FindCardBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
`;
