package com.example.servingwebcontent;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "workplaceTable")

public class createworkplacetable {

    @Id
    @Column(name = "enmno")
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long user_id;
    private String workplace;

    public Long getid() {
        return user_id;
    }

    public void setid(Long user_id) {
        this.user_id = user_id;
    }

    public String getwork() {
        return workplace;
    }

    public void setwork(String workplace) {
        this.workplace = workplace;
    }
}