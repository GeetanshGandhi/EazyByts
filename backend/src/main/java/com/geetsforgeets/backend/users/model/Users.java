package com.geetsforgeets.backend.users.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Users {
    @Id
    private String user_email;
    private String user_name;
    private String password;
    private String category;

    //constructors
    public Users(){}

    //getters and setters
    public String getUser_email() {
        return user_email;
    }

    public void setUser_email(String user_email) {
        this.user_email = user_email;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    @Override
    public String toString() {
        return "{" +
                "\"user_email\":\"" + user_email + '\"' +
                ", \"user_name\":\"" + user_name + '\"' +
                ", \"password\":\"" + password + '\"' +
                ", \"category\":\"" + category + '\"' +
                '}';
    }
}
