package com.example.servingwebcontent;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "contact_addressesTable")
public class createcontact_addressestable {

    @Id
    @Column(name = "enmno")
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long user_id;
    private int phone_number;
    private String mail_address;
    private String prefecture;
    private String city;
    private int house_number;

    public Long getid() {
        return user_id;
    }

    public void setid(Long user_id) {
        this.user_id = user_id;
    }

    public int getphone() {
        return phone_number;
    }

    public void setphone(int phone_number) {
        this.phone_number = phone_number;
    }

    public String getmail() {
        return mail_address;
    }

    public void setmail(String mail_address) {
        this.mail_address = mail_address;
    }

    public String getprefecture() {
        return prefecture;
    }

    public void setprefecture(String prefecture) {
        this.prefecture = prefecture;
    }

    public String getcity() {
        return city;
    }

    public void setcity(String city) {
        this.city = city;
    }

    public int gethouse() {
        return house_number;
    }

    public void sethouse(int house_number) {
        this.house_number = house_number;
    }
}