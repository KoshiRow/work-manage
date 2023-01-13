package com.example.servingwebcontent;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "divisionsTable")
public class createdivisionstable {

    @Id
    @Column(name = "enmno")
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long division_id;
    private String division_name;

    public Long getId() {
        return division_id;
    }

    public void setId(Long division_id) {
        this.division_id = division_id;
    }

    public String getDiv() {
        return division_name;
    }

    public void setDiv(String division_name) {
        this.division_name = division_name;
    }
}