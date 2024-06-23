package com.railwaySystem.railwayTicketing.constructer;

import com.railwaySystem.railwayTicketing.entity.TrainCar;
import com.railwaySystem.railwayTicketing.service.trainCarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class trainCarController {
    @Autowired
    trainCarService trainCarService;

    @GetMapping("/train_cars")
    public ResponseEntity<List<TrainCar>> getAllSeats() {
        List<TrainCar> train_car = trainCarService.getAllCars();

        return new ResponseEntity<>(train_car, HttpStatus.OK);
    }
}
