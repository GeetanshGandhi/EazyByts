package com.geetsforgeets.backend.users.service;

import com.geetsforgeets.backend.users.model.Users;
import com.geetsforgeets.backend.users.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Objects;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public Users saveUser(Users users) {
        return userRepository.save(users);
    }

    @Override
    public String loginUser(Users input) {
        List<Users> users = userRepository.findAll();
        for(Users i: users){
            if(Objects.equals(i.getUser_email(),input.getUser_email())){
                if(Objects.equals(i.getPassword(),input.getPassword()))
                    return i.toString();
            }
        }
        return new Users().toString();
    }

    @Override
    public Users test(Users users) {
        try{
            Users output = userRepository.findById(users.getUser_email()).get();
            if(!Objects.equals(output.getPassword(),users.getPassword())){
                return new Users();
            }
            return output;
        }catch (NoSuchElementException E){
            return new Users();
        }
    }
}
