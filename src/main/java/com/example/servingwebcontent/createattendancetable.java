package com.example.servingwebcontent;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "attendanceTable")

public class createattendancetable {

    @Id
    @Column(name = "enmno")
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long user_id;
    private Date start_time;
    private Date end_time;
    private String work_status;

    public Long getId() {
        return user_id;
    }

    public void setId(Long user_id) {
        this.user_id = user_id;
    }

    public Date getstart() {
        return start_time;
    }

    public void setstart(Date start_time) {
        this.start_time = start_time;
    }

    public Date getend() {
        return end_time;
    }

    public void setend(Date end_time) {
        this.end_time = end_time;
    }

    public String getwork() {
        return work_status;
    }

    public void setwork(String work_status) {
        this.work_status = work_status;
    }
}