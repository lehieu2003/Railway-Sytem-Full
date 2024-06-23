package com.railwaySystem.railwayTicketing.service;

import com.railwaySystem.railwayTicketing.entity.TrainCar;
import com.railwaySystem.railwayTicketing.entity.TrainSeat;
import com.railwaySystem.railwayTicketing.responsitory.TrainTripRepository;
import com.railwaySystem.railwayTicketing.entity.TrainTrip;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class trainTripService {

    private final TrainTripRepository trainTripRepository;

    @Autowired
    public trainTripService(TrainTripRepository trainTripRepository) {
        this.trainTripRepository = trainTripRepository;
    }

    public List<TrainTrip> getAllTrips() {
        List<TrainTrip> trainTrips = trainTripRepository.findAll();
        resetIds(trainTrips);
        return trainTrips;
    }

    public TrainTrip getTripById(Long id) {
        return trainTripRepository.findById(id).orElse(null);
    }

    public TrainTrip saveTrip(TrainTrip trip) {
        return trainTripRepository.save(trip);
    }

    public void deleteTrip(Long id) {
        trainTripRepository.deleteById(id);
    }

    public void resetIds(List<TrainTrip> trainTrips) {
        for (TrainTrip train : trainTrips) {
            int carId = 1;
            for (TrainCar car : train.getCarList()) {
                car.setId(carId++);
//                int seatId = 1;
//                for (TrainSeat seat : car.getSeatList()) {
//                    seat.setId(seatId++);
//                }
            }
        }
    }
}
