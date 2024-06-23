/* eslint-disable react/prop-types */
const TrainTrip = ({
  trainTrip,
  selectedTrain,
  setSelectedTrain,
  setViewMore,
  extractDateAndTime,
  viewMore,
}) => {
  return (
    <div className="flex flex-row m-3 gap-3 overflow-x-scroll hover">
      {trainTrip && trainTrip.length > 0 ? (
        trainTrip.map((item) => {
          const { date: startDate, time: startTime } = extractDateAndTime(
            item.dateStart,
            item.timeStart
          );
          const { date: endDate, time: endTime } = extractDateAndTime(
            item.dateEnd, 
            item.timeEnd
          );
          return (
            <div
              key={item.id}
              onClick={() => {
                setSelectedTrain(item.id);
              }}
              className={`flex flex-col w-64 gap-3 p-3 rounded cursor-pointer text-xs hover:bg-customBlue 
              ${selectedTrain === item.id ? "bg-customBlue" : "bg-white"}
              `}
            >
              <span className="text-center font-medium	bg-white self-center p-0.5 rounded-r-full rounded-l-full w-12  ">
                {item.name}
              </span>

              <div className="flex bg-white self-center flex-col p-1 rounded">
                <div className="flex flex-row justify-between gap-8">
                  <div>
                    <span className="font-semibold	">Start:</span>
                  </div>
                  <div>
                    <span style={{ fontSize: "9px" }}>
                      {startDate} {startTime} 
                    </span>
                  </div>
                </div>

                <div className="flex flex-row justify-between gap-10">
                  <div>
                    <span className="font-semibold	">End:</span>
                  </div>
                  <div>
                    <span style={{ fontSize: "9px" }}>
                      {endDate} {endTime} 
                    </span>
                  </div>
                </div>

                <div className="flex flex-row gap-7 mt-1">
                  <div>
                    <div>
                      <span className="font-semibold	">Ordered:</span>
                    </div>
                    <div>
                      <span style={{ fontSize: "9px" }}>{item.ordered}</span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <span className="font-semibold	">Empty:</span>
                    </div>
                    <div>
                      <span style={{ fontSize: "9px" }}> {item.emptys}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row justify-center gap-6">
                <div className="flex bg-white rounded-full w-5 h-5"></div>
                <div className="flex bg-white rounded-full w-5 h-5"></div>
              </div>
            </div>
          );
        })
      ) : (
        <div>No train trips available</div>
      )}

      {trainTrip.length > 5 && !viewMore && (
        <button
          onClick={() => setViewMore(true)}
          className="bg-gray-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded h-1/2 self-center"
        >
          View More
        </button>
      )}
    </div>
  );
};

export default TrainTrip;
