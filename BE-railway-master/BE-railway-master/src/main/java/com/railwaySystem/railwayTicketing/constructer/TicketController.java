package com.railwaySystem.railwayTicketing.constructer;

import com.railwaySystem.railwayTicketing.DTO.TicketCustomerDTO;
import com.railwaySystem.railwayTicketing.DTO.TicketDTO;
import com.railwaySystem.railwayTicketing.entity.Customer;
import com.railwaySystem.railwayTicketing.entity.Ticket;
import com.railwaySystem.railwayTicketing.responsitory.CustomerRepository;
import com.railwaySystem.railwayTicketing.responsitory.TicketRepository;
import com.railwaySystem.railwayTicketing.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
public class TicketController {
    @Autowired
    private TicketRepository ticketRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private TicketService ticketService;


    @GetMapping("/tickets")
    public List<Ticket> getTicketsByCustomerEmailAndPhone(
            @RequestParam("email") String email,
            @RequestParam("phone") String phone) {
        return ticketRepository.findByCustomer_EmailAndCustomer_Phone(email,phone);
    }

    @PostMapping("/saveTicketAndCustomer")
    public String saveTicketAndCustomer(@RequestBody TicketCustomerDTO ticketCustomerDTO) {
        Customer customer = new Customer();
        customer.setEmail(ticketCustomerDTO.getEmail());
        customer.setPhone(ticketCustomerDTO.getPhone());
        customer.setCccd(ticketCustomerDTO.getCCCD());
        customer.setFullName(ticketCustomerDTO.getFullName());
        customerRepository.save(customer);

        for (TicketDTO ticketDTO : ticketCustomerDTO.getSelectedSeat()) {
            Ticket ticket = new Ticket();
            ticket.setSeatId(ticketDTO.getId());
            ticket.setSeatName(ticketDTO.getName());
            ticket.setStatus(ticketDTO.getStatus());
            ticket.setSeatIndex(ticketDTO.getSeatIndex());
            ticket.setPrice(ticketDTO.getPrice());
            ticket.setFromStation(ticketDTO.getFromStation());
            ticket.setToStation(ticketDTO.getToStation());
            ticket.setNameCar(ticketDTO.getNameCar());
            ticket.setTimeStart(ticketDTO.getTimeStart());
            ticket.setSeatChair(ticketDTO.getSeatChair());
            ticket.setCustomer(customer);
            ticketRepository.save(ticket);
        }
        return "Saved successfully";
    }

    @DeleteMapping("/tickets/{id}")
    public String deleteTicket(@PathVariable Long id) {
        try{
            ticketRepository.deleteById(id);
            return "Deleted successfully";
        }catch(Exception e){
            return "Error deleting ticket: " + e.getMessage();
        }
    }
}


