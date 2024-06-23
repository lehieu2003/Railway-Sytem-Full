package com.railwaySystem.railwayTicketing.service;

import com.railwaySystem.railwayTicketing.responsitory.TrainSeatRepository;
import com.railwaySystem.railwayTicketing.entity.TrainSeat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class trainSeatService {

    private final TrainSeatRepository trainSeatRepository;

    @Autowired
    public trainSeatService(TrainSeatRepository trainSeatRepository) {
        this.trainSeatRepository = trainSeatRepository;
    }

    public List<TrainSeat> getAllSeats() {
        return trainSeatRepository.findAll();
    }

    public TrainSeat getSeatById(Long id) {
        return trainSeatRepository.findById(id).orElse(null);
    }

    public TrainSeat saveSeat(TrainSeat seat) {
        return trainSeatRepository.save(seat);
    }

    public void deleteSeat(Long id) {
        trainSeatRepository.deleteById(id);
    }
}
