/* eslint-disable react/prop-types */
import Toolip from "../Toolip";

const SelectedSeats = ({
  selectedCar,
  setIsShowTicketCard,
  selectedSeat,
  setSelectedSeat,
  tickets,
  setTickets,
  trainTrip,
}) => {
  function toogleSeat(seat) {
    const index = selectedSeat.findIndex((s) => s.id == seat.id);
    if (index === -1) {
      setSelectedSeat([...selectedSeat, seat]);
      const trainTrip = getTrainTrip();
      const ticketIndex = tickets.findIndex(
        (t) => t.trainTripID === trainTrip.id
      );
      if (ticketIndex !== -1) {
        const ticket = tickets[ticketIndex];
        ticket.seatList.push(seat);
        // console.log("ticket",ticket)
      } else {
        setTickets([
          ...tickets,
          {
            trainTripID: trainTrip.id,
            seatList: [seat],
            trainTrip: trainTrip,
          },
        ]);
      }

      return;
    }
    setSelectedSeat(selectedSeat.filter((s) => s.id !== seat.id));
    const trainTrip = getTrainTrip();
    const ticketIndex = tickets.findIndex(
      (t) => t.trainTripID === trainTrip.id
    );
    if (ticketIndex !== -1) {
      const ticket = tickets[ticketIndex];
      ticket.seatList = ticket.seatList.filter((s) => s.id !== seat.id);
      if (ticket.seatList.length === 0) {
        setTickets(tickets.filter((t) => t.trainTripID !== trainTrip.id));
      }
    }
  }

  function isSeatSelected(seat) {
    return selectedSeat.findIndex((s) => s.id === seat.id) !== -1;
  }

  function areAllSeatsOrdered() {
    return selectedCar?.seatList?.every(seat => seat.status === "order");
    
  }

  function getTrainTrip() {
    // console.log(trainTrip, selectedCar);

    return trainTrip.find((t) => {
      const listCar = t.carList;
      let isFound = false;

      listCar.forEach((car) => {
        if (car.id === selectedCar.id) {
          isFound = true;
        }
      });
      return isFound;
    });
  }

  return (
    <div className="grid grid-cols-10 grid-rows-4 gap-2 border-2 p-5 w-4/5 self-center">
      {selectedCar?.seatList?.map((seat) => {
        // console.log(seat.seatChair)
        const isOrdered = seat.status === "order";
        return (
          <div
            key={seat.id}
            style={{
              backgroundColor: isOrdered ? "#dd5227" : undefined,
              pointerEvents: isOrdered ? "none" : "auto",
              opacity: isOrdered ? 0.5 : 1,
            }}
            className={`flex flex-col justify-center items-center p-1 text-black hover:font-bold text-xs rounded cursor-pointer size-10 
            ${isSeatSelected(seat) ? "bg-customGreen" : "bg-white"}
                `}

            onClick={() => {
              if (!isOrdered) {
                setIsShowTicketCard(true);
                toogleSeat(seat);
              }
            }}
          >
            <Toolip
              popupComponent={
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "5px",
                    width: "100px",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <div>
                    {seat.status === "empty" ? "Ghế trống" : "Ghế đã đặt"}
                  </div>
                  <span>Price: {seat.price}</span>
                </div>
              }
            >
              <span>{seat.seatChair}</span>
            </Toolip>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedSeats;
