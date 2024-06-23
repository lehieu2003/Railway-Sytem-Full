// import { useLocation } from "react-router-dom";
import { Container, Container1, Container2 } from "./TrainResultCss";
import DiscountContent from "./Discount/DiscountContent";
import StatusTrain from "./StatusTrain/StatusTrain";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import useFilterStore from "../../../store/filterStore";
import { selectListTrain } from "../../../store/filterStore";
import SelectedSeats from "./Seats/SelectedSeats";
import TrainTrip from "./TrainTrip/TrainTrip";
import SelectedTrainCar from "./SelectedTrainCar/SelectedTrainCar";
import TicketCard from "./TicketCard/TicketCard";
import JourneyInformation from "./JourneyInformation/JourneyInformation";
import axios from 'axios';

const TrainResult = () => {
  const data = useFilterStore(selectListTrain);
  const trainTrip = data;

  const [viewMore, setViewMore] = useState(false);
  const [selectedTrain, setSelectedTrain] = useState([]);
  const [selectedCar, setSelectedCar] = useState([]);
  const [selectedSeat, setSelectedSeat] = useState([]);

  const [tickets, setTickets] = useState([]);

  const navigate = useNavigate();

  const handleBuyTicket = () => {
    navigate("/fill-information");
  };

  const extractDateAndTime = (datetimeString, timeString) => {
    const date = new Date(datetimeString);
    const time = timeString;
  
    // Adding one day
    date.setDate(date.getDate() + 1);
  
    return {
      date: date.toISOString().split("T")[0],
      time: time,
    };
  };
  

  const formatDate = (datetime) => {
    const date = new Date(datetime);

    
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    localStorage.setItem("selectedSeat", JSON.stringify(selectedSeat));
  }, [selectedSeat]);

  const [isShowTicketCard, setIsShowTicketCard] = useState(false);

  return (
    <Container>
      <Container1>
        <div className="flex flex-row m-3 gap-0 p-1">
          <h2 className="text-white font-bold bg-customBlue rounded-tr-none rounded-br-none rounded">
            Departure: from {trainTrip[0]?.fromStation} to{" "}
            {trainTrip[0]?.toStation}
          </h2>
          <img
            src="label_bg.png"
            alt="Description of image"
            className="rounded-tl-none rounded-bl-none rounded"
          />
        </div>

        <TrainTrip
          trainTrip={trainTrip}
          selectedTrain={selectedTrain}
          setSelectedTrain={setSelectedTrain}
          setViewMore={setViewMore}
          extractDateAndTime={extractDateAndTime}
          viewMore={viewMore}
        ></TrainTrip>

        {selectedTrain && (
          <SelectedTrainCar
            trainTrip={trainTrip}
            selectedTrain={selectedTrain}
            setSelectedCar={setSelectedCar}
            selectedCar={selectedCar}
          ></SelectedTrainCar>
        )}

        {selectedCar && (
          <div>
            <h1 className="text-2xl text-center text-sky-500 py-5">
              Car number {selectedCar.id}: {selectedCar.fullName}
            </h1>
          </div>
        )}

        {selectedCar && (
          <SelectedSeats
            selectedCar={selectedCar}
            setIsShowTicketCard={setIsShowTicketCard}
            setSelectedSeat={setSelectedSeat}
            selectedSeat={selectedSeat}
            tickets={tickets}
            setTickets={setTickets}
            trainTrip={trainTrip}
          ></SelectedSeats>
        )}

        <DiscountContent></DiscountContent>

        <StatusTrain></StatusTrain>
      </Container1>

      <Container2>
        <TicketCard
          isShowTicketCard={isShowTicketCard}
          selectedSeat={selectedSeat}
          selectedTrain={selectedTrain}
          trainTrip={trainTrip}
          handleBuyTicket={handleBuyTicket}
          formatDate={formatDate}
        ></TicketCard>

        <JourneyInformation
          selectedTrain={selectedTrain}
          trainTrip={trainTrip}
          handleBuyTicket={handleBuyTicket}
        ></JourneyInformation>
      </Container2>
    </Container>

  );
};

export default TrainResult;
