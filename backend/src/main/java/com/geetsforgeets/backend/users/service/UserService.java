package com.geetsforgeets.backend.users.service;

import com.geetsforgeets.backend.users.model.Users;
import java.util.List;

public interface UserService {
    Users saveUser(Users users);
    String loginUser(Users users);
    Users test(Users users);
}
