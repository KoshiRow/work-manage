package com.example.servingwebcontent;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class registWorkplace {
    public static void main(String workplace) {
        Connection con;

        public UserDao(Connection con) {
            this.con = con;
        }
        public registWorkplace () {
            PreparedStatement stmt = con.prepareStatement("UPDATE workplaceTable set workplace =" workplace "WHERE user_id = " id);
            ResultSet rs = stmt.executeQuery();
        }
    }
}
