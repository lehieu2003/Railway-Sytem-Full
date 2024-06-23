package com.railwaySystem.railwayTicketing.service;

import java.util.ArrayList;
import java.util.List;
import com.railwaySystem.railwayTicketing.DTO.userDTO;
import com.railwaySystem.railwayTicketing.entity.users;
import com.railwaySystem.railwayTicketing.payload.request.signUpRequest;
import com.railwaySystem.railwayTicketing.responsitory.userRepository;
import com.railwaySystem.railwayTicketing.service.imp.loginServiceIMP;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class loginService implements loginServiceIMP {
    @Autowired
    userRepository userRepository;

    @Override
    public List<userDTO> getAllUser(){
        List<users> listUser = userRepository.findAll();
        List<userDTO> userDTOList = new ArrayList<>();

        for(users user: listUser){
            userDTO userDTOs = new userDTO();
            userDTOs.setEmail(user.getEmail());
            userDTOs.setUser_id(user.getUser_id());
            userDTOs.setPassword(user.getPassword());
            userDTOs.setUsername(user.getUsername());

            userDTOList.add(userDTOs);
        }
        return userDTOList;
    }

    @Override
    public boolean checkLogin(String username,String password){
        List<users> listUser = userRepository.findByEmailAndPassword(username,password);
        return listUser.size()>0;
    }
    @Override
    public boolean addUser(signUpRequest signUpRequest){

        users user = new users();
        user.setUsername(signUpRequest.getUsername());
        user.setEmail(signUpRequest.getEmail());
        user.setPassword(signUpRequest.getPassword());

        try{
            userRepository.save(user);
            return true;
        }catch (Exception e){
            return false;
        }
    }

}
