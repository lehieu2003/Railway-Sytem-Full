package com.railwaySystem.railwayTicketing.responsitory;

import com.railwaySystem.railwayTicketing.entity.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Long> {
    List<Ticket> findByCustomer_EmailAndCustomer_Phone(String email, String phone);

}