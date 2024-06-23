import React from "react";
import { Grid1, Item } from "./StatusTrainElements";

const StatusTrain = () => {
  return (
    <Grid1>
      <Item className="flex flex-row justify-between">
        <div>
          <img
            src="trainCar2 - Copy.png"
            alt="Train Car"
            className="bg-customBlue rounded"
          />
          <span>Toa con ve</span>
        </div>

        <div>
          <img
            src="trainCar2 - Copy.png"
            alt="Train Car"
            className="bg-customGreen rounded"
          />
          <span>Toa dang chon</span>
        </div>

        <div>
          <img
            src="trainCar2 - Copy.png"
            alt="Train Car"
            className="bg-customOrange rounded"
          />
          <span>Toa het ve</span>
        </div>
      </Item>
    </Grid1>
  );
};

export default StatusTrain;
