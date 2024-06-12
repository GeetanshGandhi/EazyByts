package com.geetsforgeets.backend.Courses.controller;

import com.geetsforgeets.backend.Courses.model.Courses;
import com.geetsforgeets.backend.Courses.services.CourseServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/courses")
@CrossOrigin
public class CourseController {
    @Autowired
    CourseServices courseServices;

    @PostMapping("/add")
    public long addCourse(@RequestBody Courses courses) {
        return courseServices.saveCourse(courses);
    }

    @PostMapping("/getById")
    public String getById(@RequestBody Courses courses) {return courseServices.getCourseById(courses.getCourse_id());}

    @GetMapping("/getAll")
    public List<Courses> getAll()   {return courseServices.getAllCourses();}

    @PostMapping("/getByInstructor")
    public List<Courses> getByInstructor(@RequestBody String instructor){
        return courseServices.getCourseByInstructor(instructor);
    }
}
