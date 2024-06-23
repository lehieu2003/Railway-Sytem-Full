package com.railwaySystem.railwayTicketing.constructer;


import com.railwaySystem.railwayTicketing.payload.request.signUpRequest;
import com.railwaySystem.railwayTicketing.payload.responceData;
import com.railwaySystem.railwayTicketing.service.imp.loginServiceIMP;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/login")
public class loginController {
    @Autowired
    loginServiceIMP loginServiceIMP;

    @PostMapping("/signin")
    public ResponseEntity<?> signin(@RequestParam(value = "username", required = false) String username , @RequestParam(value = "password",required = false) String password){

        responceData responceData = new responceData();
        if(loginServiceIMP.checkLogin(username, password)){
            responceData.setData(true); 
        }else{
            responceData.setData(false);
        }
        return new ResponseEntity<>(loginServiceIMP.getAllUser(), HttpStatus.OK);
    }


    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody signUpRequest signUpRequest){
        responceData responceData = new responceData();

        responceData.setData(loginServiceIMP.addUser(signUpRequest));

        return new ResponseEntity<>(responceData, HttpStatus.OK);
    }
}
