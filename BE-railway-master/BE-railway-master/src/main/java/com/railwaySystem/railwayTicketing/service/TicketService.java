package com.railwaySystem.railwayTicketing.service;

import com.railwaySystem.railwayTicketing.DTO.TicketDTO;
import com.railwaySystem.railwayTicketing.entity.Customer;
import com.railwaySystem.railwayTicketing.entity.Ticket;
import com.railwaySystem.railwayTicketing.responsitory.CustomerRepository;
import com.railwaySystem.railwayTicketing.responsitory.TicketRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TicketService {

    @Autowired
    private TicketRepository ticketRepository;

    public List<Ticket> getTicketsByCustomerEmailAndPhone(String email, String phone) {
        return ticketRepository.findByCustomer_EmailAndCustomer_Phone(email, phone);
    }

}