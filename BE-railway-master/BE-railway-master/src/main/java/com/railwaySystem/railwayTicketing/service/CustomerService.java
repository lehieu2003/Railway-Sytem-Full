package com.railwaySystem.railwayTicketing.service;

import com.railwaySystem.railwayTicketing.entity.Customer;
import com.railwaySystem.railwayTicketing.responsitory.CustomerRepository;
import com.railwaySystem.railwayTicketing.responsitory.TicketRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private TicketRepository ticketRepository;

    @Transactional
    public Customer saveCustomerWithTickets(Customer customer) {
        return customerRepository.save(customer);
    }
}
