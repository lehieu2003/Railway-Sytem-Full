package com.railwaySystem.railwayTicketing.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import com.railwaySystem.railwayTicketing.entity.TrainSeat;
import org.springframework.stereotype.Repository;

@Repository
public interface TrainSeatRepository extends JpaRepository<TrainSeat, Long> {
}
