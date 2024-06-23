package com.railwaySystem.railwayTicketing.payload.request;

import com.railwaySystem.railwayTicketing.entity.Customer;
import com.railwaySystem.railwayTicketing.entity.Ticket;

import java.util.List;

public class CustomerTicketRequest {
    private Customer customer;
    private List<Ticket> tickets;

    // Getters and setters

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public List<Ticket> getTickets() {
        return tickets;
    }

    public void setTickets(List<Ticket> tickets) {
        this.tickets = tickets;
    }
}
