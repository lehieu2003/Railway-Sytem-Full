package com.railwaySystem.railwayTicketing.service;

import com.railwaySystem.railwayTicketing.entity.users;
import com.railwaySystem.railwayTicketing.responsitory.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private userRepository userRepository;

    public List<users> getAllUsers() {
        return userRepository.findAll();
    }

    public users getUserById(int userId) {
        return userRepository.findById(userId).orElse(null);
    }

    public users saveUser(users user) {
        return userRepository.save(user);
    }

    public void deleteUser(int userId) {
        userRepository.deleteById(userId);
    }
}
