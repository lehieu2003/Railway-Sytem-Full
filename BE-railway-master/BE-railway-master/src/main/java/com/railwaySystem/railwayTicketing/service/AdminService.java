package com.railwaySystem.railwayTicketing.service;
import com.railwaySystem.railwayTicketing.entity.Admin;
import com.railwaySystem.railwayTicketing.responsitory.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public boolean authenticate(String username, String password) {
        Optional<Admin> adminOpt = adminRepository.findByUsername(username);
        if (adminOpt.isPresent()) {
            Admin admin = adminOpt.get();
            return admin.getPassword().equals(password);
        }
        return false;
    }


    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }
}

