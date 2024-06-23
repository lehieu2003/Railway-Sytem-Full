package com.railwaySystem.railwayTicketing.service;

import com.railwaySystem.railwayTicketing.entity.trips;
import com.railwaySystem.railwayTicketing.payload.request.addTripRequest;
import com.railwaySystem.railwayTicketing.responsitory.tripRepository;
import com.railwaySystem.railwayTicketing.DTO.tripDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class tripService{
    @Autowired
    private tripRepository tripRepository;

//    @Override
//    public List<tripDTO> getAllTrip() {
//        List<trips> listTrip = tripRepository.findAll();
//        List<tripDTO> tripDTOList = new ArrayList<>();
//
//        for (trips trip : listTrip) {
//            tripDTO tripDTOs = new tripDTO();
//            tripDTOs.setOrigin(trip.getOrigin());
//            tripDTOs.setDestination(trip.getDestination());
//            tripDTOs.setArrival_time(trip.getArrival_time());
//            tripDTOs.setDestination(trip.getDestination());
//            tripDTOs.setFare(trip.getFare());
//
//            tripDTOList.add(tripDTOs);
//        }
//        return tripDTOList;
//    }
//
//    @Override
//    public boolean checkTrip(String origin, String destination, Date departure_time, Date arrival_time){
//        List<trips> listTrip = tripRepository.findAllTrip(origin,destination,departure_time,arrival_time);
//        return listTrip.size()>0;
//    }
//
//    @Override
//    public boolean addTrip(addTripRequest addTripRequest){
//
//        trips trip = new trips();
//        trip.setTrip_id(addTripRequest.getTrip_id());
//        trip.setFare(addTripRequest.getFare());
//        trip.setOrigin(addTripRequest.getOrigin());
//        trip.setDestination(addTripRequest.getDestination());
//        trip.setArrival_time(addTripRequest.getArrival_time());
//        trip.setDeparture_time(addTripRequest.getDeparture_time());
//
//        try{
//            tripRepository.save(trip);
//            return true;
//        }catch (Exception e){
//            return false;
//        }
    public List<trips> getDataFromMySQL() {
        return tripRepository.findAll();
    }
}
