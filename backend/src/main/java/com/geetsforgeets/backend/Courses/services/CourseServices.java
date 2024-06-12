package com.geetsforgeets.backend.Courses.services;

import com.geetsforgeets.backend.Courses.model.Courses;

import java.util.List;

public interface CourseServices {
    long saveCourse(Courses course);
    String getCourseById(long id);
    List<Courses> getAllCourses();
    List<Courses> getCourseByInstructor(String instructor);

}
