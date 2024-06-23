/* eslint-disable react/prop-types */
import Toolip from "../Toolip";

const SelectedTrainCar = ({
  trainTrip,
  selectedTrain,
  setSelectedCar,
  selectedCar,
}) => {
  // console.log("trai",selectedTrain)
  return (
    <div className="flex flex-row gap-3 m-3">
      <div className="flex flex-column gap-3">
        {trainTrip.find((train) => train.id === selectedTrain)?.carList?.map((car) => (
            <div
              key={car.id}
              onClick={() => {
                setSelectedCar(car);
              }}
              className="text-center text-xs"
            >
              <div className="w-14 cursor-pointer inline-block">
                <Toolip
                  popupComponet={
                    <div
                      style={{
                        width: "110px",
                        padding: "5px",
                      }}
                    >
                      <span>{car.fullName}</span>
                    </div>
                  }
                >
                  <img
                    src="trainCar2 - Copy.png"
                    alt="Train Car"
                    title={car.fullName}
                    style={
                      car.occupied == car.seats
                        ? { backgroundColor: "red" }
                        : {}
                    }
                    className={`rounded ${
                      selectedCar === car ? "bg-customGreen" : "bg-sky-300"
                    }`}
                  />
                </Toolip>
              </div>
              <div>
                <span>{car.name}</span>
              </div>
            </div>
          ))
          .reverse()}
      </div>
      <div className="w-14 cursor-pointer inline-block">
        <img src="train2.png" alt="Train Car" />
        <h1 className="text-xs text-center mt-1">
          {trainTrip[selectedTrain - 1]?.name}
        </h1>
      </div>
    </div>
  );
};

export default SelectedTrainCar;
