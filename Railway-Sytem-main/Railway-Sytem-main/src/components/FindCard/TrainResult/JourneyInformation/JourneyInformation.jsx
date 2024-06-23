import { Button, Input } from "../TrainResultCss";
import { FaCartArrowDown } from "react-icons/fa";
import dayjs from "dayjs";

const JourneyInformation = ({ selectedTrain, trainTrip, handleBuyTicket }) => {
  console.log("hi",trainTrip)
  return (
    <div className="flex flex-col border-2 rounded">
      <div className="flex flex-row justify-start items-center gap-1 cursor-pointer p-2 bg-slate-300">
        <FaCartArrowDown />
        <span className="text-customBlue font-bold">Journey information</span>
      </div>
      <div className="flex w-full h-1 bg-slate-700"></div>

      <div className="flex flex-col p-2">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <span className="text-customBlue">From Station</span>
            <Input
              type="text"
              disabled={true}
              value={trainTrip[0].fromStation}
            />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-customBlue">To Station</span>
            <Input
              type="text"
              disabled={true}
              value={trainTrip[0].toStation}
            />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-customBlue">Departure Day</span>
            <Input
              type="date"
              disabled={true}
              value={dayjs(trainTrip.dateStart).add(1, 'day').format("YYYY-MM-DD")}
              
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-customBlue">Time Start</span>
            <Input
              type="time"
              disabled={true}
              value={trainTrip[0].timeStart}
              
            />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-customBlue">Arrive day</span>
            <Input
              type="date"
              disabled={true}
              value={dayjs(trainTrip.dateEnd).add(2, 'day').format("YYYY-MM-DD")
            }
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-customBlue">Time End</span>
            <Input
              type="time"
              disabled={true}
              value={trainTrip[0].timeEnd}
              
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyInformation;
