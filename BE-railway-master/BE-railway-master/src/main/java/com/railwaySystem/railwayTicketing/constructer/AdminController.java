package com.railwaySystem.railwayTicketing.constructer;

import com.railwaySystem.railwayTicketing.entity.Admin;
import com.railwaySystem.railwayTicketing.payload.responceData;
import com.railwaySystem.railwayTicketing.responsitory.AdminRepository;
import com.railwaySystem.railwayTicketing.service.AdminService;
import com.railwaySystem.railwayTicketing.service.imp.loginServiceIMP;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
public class AdminController {

    @Autowired
    private loginServiceIMP loginService;
    @Autowired
    private AdminRepository adminRepository;

    @PostMapping("/loginAdmin/signin")
    public ResponseEntity<List<Admin>> signin(@RequestParam(value = "username", required = false) String username , @RequestParam(value = "password",required = false) String password){

        responceData responceData = new responceData();
        if(loginService.checkLogin(username, password)){
            responceData.setData(true);
        }else{
            responceData.setData(false);
        }
        List<Admin> admins = adminRepository.findAll();
        if (admins.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(admins, HttpStatus.OK);
    }

}
