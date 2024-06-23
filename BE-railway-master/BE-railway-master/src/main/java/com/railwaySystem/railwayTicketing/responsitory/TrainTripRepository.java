package com.railwaySystem.railwayTicketing.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import com.railwaySystem.railwayTicketing.entity.TrainTrip;
import org.springframework.stereotype.Repository;

@Repository
public interface TrainTripRepository extends JpaRepository<TrainTrip, Long> {
}
