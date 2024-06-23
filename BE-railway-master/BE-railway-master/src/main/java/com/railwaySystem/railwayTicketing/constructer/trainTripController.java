package com.railwaySystem.railwayTicketing.constructer;

import com.railwaySystem.railwayTicketing.entity.TrainTrip;
import com.railwaySystem.railwayTicketing.entity.TrainSeat;
import com.railwaySystem.railwayTicketing.entity.TrainCar;
import com.railwaySystem.railwayTicketing.service.trainTripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class trainTripController {
    @Autowired
    trainTripService trainTripService;

    @GetMapping("/train_trips")
    public ResponseEntity<List<TrainTrip>> getAllSeats() {
        List<TrainTrip> train_trips = trainTripService.getAllTrips();

        return new ResponseEntity<>(train_trips, HttpStatus.OK);
    }
}
