package com.geetsforgeets.backend.Courses.model;

import jakarta.persistence.*;

@Entity
public class Courses {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long course_id;

    private String course_name,instructor;
    @Column(columnDefinition = "VARCHAR(512)")
    private String description;

    public Courses(){}

    public long getCourse_id() {
        return course_id;
    }

    public void setCourse_id(long course_id) {
        this.course_id = course_id;
    }

    public String getCourse_name() {
        return course_name;
    }

    public void setCourse_name(String course_name) {
        this.course_name = course_name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getInstructor() {
        return instructor;
    }

    public void setInstructor(String instructor) {
        this.instructor = instructor;
    }

    @Override
    public String toString() {
        return "{" +
                "\"course_id\":" + course_id +
                ", \"course_name\":\"" + course_name + '\"' +
                ", \"description\":\"" + description + '\"' +
                ", \"instructor\":\"" + instructor + '\"' +
                '}';
    }
}
