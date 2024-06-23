package com.railwaySystem.railwayTicketing.constructer;

import com.railwaySystem.railwayTicketing.entity.Customer;
import com.railwaySystem.railwayTicketing.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/customers")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping("/buyTickets")
    public Customer buyTickets(@RequestBody Customer customer) {
        try {
            return customerService.saveCustomerWithTickets(customer);
        } catch (Exception e) {
            e.printStackTrace();
            throw new ResponseStatusException(
                    HttpStatus.INTERNAL_SERVER_ERROR, "Lỗi trong quá trình mua vé", e);
        }
    }
}