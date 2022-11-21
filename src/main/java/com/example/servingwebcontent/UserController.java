package com.example.servingwebcontent;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/counter")
public class UserController {

    @Autowired
    UserService service;

    // 一覧表示
    @RequestMapping(value = "/selectall", method = RequestMethod.GET)
    public List<User> counterSelectAll() {
        return service.selectAll();
    }

}