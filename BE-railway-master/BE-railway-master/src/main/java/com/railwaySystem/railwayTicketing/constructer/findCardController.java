package com.railwaySystem.railwayTicketing.constructer;

import com.railwaySystem.railwayTicketing.entity.trips;
import com.railwaySystem.railwayTicketing.payload.responceData;
import com.railwaySystem.railwayTicketing.service.tripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/findTrips")
public class findCardController {
    @Autowired
    tripService tripService;

    @GetMapping("/getInfo")
    public ResponseEntity<List<trips>> findTickets() {
        List<trips> trip = tripService.getDataFromMySQL();

        return new ResponseEntity<>(trip, HttpStatus.OK);
    }
}
