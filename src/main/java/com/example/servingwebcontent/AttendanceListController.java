package com.example.servingwebcontent;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.List;
import java.util.Map;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.beans.factory.annotation.Autowired;

@Controller
public class AttendanceListController {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/attendanceList")
    public String attendanceList(Model model) {
        String sql = "select id,date,begin_time,end_time,rest from \"attendances\"";
        List<Map<String, Object>> attendances = jdbcTemplate.queryForList(sql);
        model.addAttribute("attendances", attendances);
        return "attendanceList";
    }

}