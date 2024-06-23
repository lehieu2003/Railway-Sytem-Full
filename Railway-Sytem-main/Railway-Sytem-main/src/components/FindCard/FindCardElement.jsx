import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(41, 38, 38, 0.85);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  width: 80%;
  border-radius: 10px;
  gap: 20px;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
`;
export const StationInput = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
export const StationFrom = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;
export const StationTo = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;
export const DateClassInput = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
export const DateInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;
// export const LocalizationProvider = styled.LocalizationProvider`
//   display: flex;
//   width: 45%;
//   background-color: white;
// `;

export const ClassInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;
// export const PassengerInput = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 55%;
// `;

export const InputBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Label = styled.label`
  color: #fff;
  font-weight: bold;
  margin-bottom: 8px;
  width: 100%;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
`;

export const InputPassenger = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
`;

export const Button = styled.button`
  background: #102f63;
  color: white;
  width: 100%;
  height: 40px;
  cursor: pointer;
  border-radius: 10px 10px 10px 10px;
  border: 2px solid #102f63;
`;
