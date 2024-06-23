package com.railwaySystem.railwayTicketing.constructer;

import com.railwaySystem.railwayTicketing.entity.TrainSeat;
import com.railwaySystem.railwayTicketing.service.trainSeatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class trainSeatController {
    @Autowired
    trainSeatService trainSeatService;

    @GetMapping("/train_seats")
    public ResponseEntity<List<TrainSeat>> getAllSeats() {
        List<TrainSeat> train_seat = trainSeatService.getAllSeats();

        return new ResponseEntity<>(train_seat, HttpStatus.OK);
    }
}
