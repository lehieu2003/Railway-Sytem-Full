package com.railwaySystem.railwayTicketing.service.imp;

import com.railwaySystem.railwayTicketing.DTO.userDTO;
import com.railwaySystem.railwayTicketing.payload.request.signUpRequest;

import java.util.List;

public interface loginServiceIMP {
    List<userDTO> getAllUser();
    boolean checkLogin(String username, String password);
    boolean addUser(signUpRequest signUpRequest);

}
