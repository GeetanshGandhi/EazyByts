package com.geetsforgeets.backend.users.controller;

import com.geetsforgeets.backend.users.model.Users;
import com.geetsforgeets.backend.users.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/users")
@CrossOrigin
public class UserContoller {
    @Autowired
    private UserService userService;

    //add data
    @PostMapping("/add")
    public String addUser(@RequestBody Users users){
        userService.saveUser(users);
        return "User added!";
    }

    //fetch data
    @PostMapping("/login")
    public String loginUser(@RequestBody Users users){
        return userService.loginUser(users);
    }

    @PostMapping("/tester")
    public Users testFun(@RequestBody Users users){
        return userService.test(users);
    }
}
