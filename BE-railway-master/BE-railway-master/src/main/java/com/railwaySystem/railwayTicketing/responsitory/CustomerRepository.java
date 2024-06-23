package com.railwaySystem.railwayTicketing.responsitory;

import com.railwaySystem.railwayTicketing.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
}