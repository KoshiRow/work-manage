package com.example.servingwebcontent;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.DriverManager;

public class DBConnection {
    private Connection con = null;

    // connection
    public Connection getConnection() {
        try {
            con = DriverManager.getConnection("jdbc:mysql://localhost:3306/testdb", "root", "root");
        } catch (SQLException e) {
            System.out.println("DB Connection Error:" + e.getMessage());
        }
        return con;
    }

    // close
    public void close() {
        try {
            if (con != null) {
                con.close();
            }
        } catch (SQLException e) {
            System.out.println("DB Close error.");
        }
    }
}