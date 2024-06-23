package com.railwaySystem.railwayTicketing.responsitory;

import java.util.Date;
import java.util.List;
import com.railwaySystem.railwayTicketing.entity.trips;
import org.springframework.data.jpa.repository.JpaRepository;

public interface tripRepository extends JpaRepository<trips,Integer> {
//    List<trips> findAllTrip(String origin, String destination, Date departure_time, Date arrival_time);
}
