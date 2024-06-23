package com.railwaySystem.railwayTicketing.constructer;

import com.railwaySystem.railwayTicketing.entity.users;
import com.railwaySystem.railwayTicketing.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<users> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public users getUserById(@PathVariable int id) {
        return userService.getUserById(id);
    }

    @PostMapping
    public users createUser(@RequestBody users user) {
        return userService.saveUser(user);
    }

    @PutMapping("/{id}")
    public users updateUser(@PathVariable int id, @RequestBody users userDetails) {
        users user = userService.getUserById(id);
        if (user != null) {
            user.setUsername(userDetails.getUsername());
            user.setPassword(userDetails.getPassword());
            user.setEmail(userDetails.getEmail());
            return userService.saveUser(user);
        } else {
            return null;
        }
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable int id) {
        userService.deleteUser(id);
    }
}

