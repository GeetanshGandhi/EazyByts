package com.geetsforgeets.backend.Courses.services;

import com.geetsforgeets.backend.Courses.model.Courses;
import com.geetsforgeets.backend.Courses.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Objects;

@Service
public class CourseServiceImpl implements CourseServices {
    @Autowired
    CourseRepository courseRepository;
    @Override
    public long saveCourse(Courses course) {
        return courseRepository.save(course).getCourse_id();
    }

    @Override
    public String getCourseById(long id) {
        try{
            return courseRepository.findById(id).get().toString();
        }catch(NoSuchElementException e){
            return new Courses().toString();
        }
    }

    @Override
    public List<Courses> getAllCourses() {
        return courseRepository.findAll();
    }

    @Override
    public List<Courses> getCourseByInstructor(String instructor) {
        List<Courses> out = courseRepository.findAll();
        List<Courses> ret = new ArrayList<>();
        for(Courses i: out){
            if(Objects.equals(i.getInstructor(),instructor)) ret.add(i);
        }
        return ret;
    }
}
