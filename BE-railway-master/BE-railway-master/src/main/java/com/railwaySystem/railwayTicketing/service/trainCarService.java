package com.railwaySystem.railwayTicketing.service;

import com.railwaySystem.railwayTicketing.responsitory.TrainCarRepository;
import com.railwaySystem.railwayTicketing.entity.TrainCar;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class trainCarService {

    private final TrainCarRepository trainCarRepository;

    @Autowired
    public trainCarService(TrainCarRepository trainCarRepository) {
        this.trainCarRepository = trainCarRepository;
    }

    public List<TrainCar> getAllCars() {
        return trainCarRepository.findAll();
    }

    public TrainCar getCarById(Long id) {
        return trainCarRepository.findById(id).orElse(null);
    }

    public TrainCar saveCar(TrainCar car) {
        return trainCarRepository.save(car);
    }

    public void deleteCar(Long id) {
        trainCarRepository.deleteById(id);
    }
}
