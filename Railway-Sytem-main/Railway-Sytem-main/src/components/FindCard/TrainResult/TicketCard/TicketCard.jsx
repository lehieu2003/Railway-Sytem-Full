/* eslint-disable react/prop-types */
import { FaCartArrowDown } from "react-icons/fa";
import { Button } from "../TrainResultCss";

const TicketCard = ({
  isShowTicketCard,
  selectedSeat,
  selectedTrain,
  trainTrip,
  handleBuyTicket,
  formatDate,
}) => {
  return (
    <div className="flex flex-col border-2 mb-2 rounded">
      <div className="flex flex-row justify-start items-center gap-1 cursor-pointer p-2 bg-slate-300">
        <FaCartArrowDown />
        <span className="text-customBlue font-bold">Ticket cart</span>
      </div>
      <div className="flex w-full h-1 bg-slate-700"></div>

      {isShowTicketCard && selectedSeat && selectedTrain ? (
        <div className="flex flex-col p-2">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <span>Chiều đi</span>
          </div>

          {selectedSeat.map((seat) => {
            return (
              <div key={seat.id} className="flex flex-col p-1">
                <div className="flex flex-row gap-1 text-xs">
                  <span>{"Trip: " + seat.nameCar}</span>
                </div>
                <div className="flex flex-row justify-between text-xs">
                <span>
                    {"From: "+ seat.fromStation}
                    <br/>
                    {"To: "+ seat.toStation}
                </span>
                </div>
                <div className="flex flex-row justify-between text-xs">
                  <span>{"Time Start: "+seat.timeStart}</span>
                </div>

                <div className="flex flex-row gap-1 text-xs">
                  <div>
                    <span>Carriage: {seat.name}-{seat.seatChair}</span>
                  </div>
                </div>
                <div className="flex flex-row gap-1 text-xs">
                  <div>
                    <span>Price: {seat.price}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex self-center p-2">
          <span className="text-red-600">No ticket yet</span>
        </div>
      )}

      <div className="flex w-full h-1 bg-slate-700 mb-3"></div>
      <Button onClick={handleBuyTicket}>Buy ticket</Button>
    </div>
  );
};

export default TicketCard;
