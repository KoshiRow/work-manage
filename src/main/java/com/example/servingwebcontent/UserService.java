package com.example.servingwebcontent;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository repository;

    public List<User> selectAll() {
        return repository.findAll();
    }

}