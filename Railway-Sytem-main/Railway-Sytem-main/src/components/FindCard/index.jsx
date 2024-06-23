import {
  Container,
  Button,
  InputContainer,
  StationInput,
  DateClassInput,
  StationFrom,
  StationTo,
  Label,
  Select,
  DateInput,
} from "./FindCardElement";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { city } from "../constants/city";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFilterStore from "../../store/filterStore";

const FindCard = () => {
  const navigate = useNavigate();

  const [trip, setTrip] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [startTime, setDateStart] = useState("");
  const [endTime, setDateEnd] = useState("");

  const { setData } = useFilterStore((state) => state);

  const handleFind = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/train_trips", {
        params: {
          from: from,
          to: to,
          startTime: startTime,
          endTime: endTime,
        }
      });
  
      let filteredTrips = res.data.filter((tripItem) => {
        const departTime = new Date(tripItem.dateStart);
        const staTime = new Date(tripItem.dateEnd);
        const starTime = new Date(startTime);
        const enTime = new Date(endTime);
        return (
          tripItem.fromStation === from &&
          tripItem.toStation === to &&
          departTime.getDate() === starTime.getDate() &&
          staTime.getDate() === enTime.getDate()
        );
      });
  
      setTrip(filteredTrips);
      setData(filteredTrips);
      
      if (filteredTrips.length > 0) {
        // console.log(res.data)
        navigate("/train-result");
      } else {
        alert("không có tàu");
      }
    } catch (error) {
      console.error("Error fetching trips: ", error);
      alert("An error occurred while fetching trips. Please try again later.");
    }
  };
  

  return (
    <Container>
      <InputContainer>
        <StationInput>
          <StationFrom>
            <Label>From</Label>
            <Select value={from} onChange={(e) => setFrom(e.target.value)}>
              <option value="">Select a departure station</option>
              {city.data.data.map((c) => (
                <option key={c._id} value={c.name_with_type}>
                  {c.name_with_type}
                </option>
              ))}
            </Select>
          </StationFrom>

          <StationTo>
            <Label>To</Label>
            <Select value={to} onChange={(e) => setTo(e.target.value)}>
              <option value="">Select a destinate station</option>
              {city.data.data.map((c) => (
                <option key={c._id} value={c.name_with_type}>
                  {c.name_with_type}
                </option>
              ))}
            </Select>
          </StationTo>
        </StationInput>

        <DateClassInput>
          <DateInput>
            <Label>Date start</Label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={startTime || ""}
                onChange={(newDate) => setDateStart(newDate)}
              />
            </LocalizationProvider>
          </DateInput>
          <DateInput>
            <Label>Date end</Label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={endTime || ""}
                onChange={(newDate) => setDateEnd(newDate)}
              />
            </LocalizationProvider>
          </DateInput>
        </DateClassInput>
      </InputContainer>
      <Button onClick={handleFind}>Find</Button>
    </Container>
  );
};

export default FindCard;
