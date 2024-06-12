package com.geetsforgeets.backend.CourseContent.controller;

import com.geetsforgeets.backend.CourseContent.model.CourseContent;
import com.geetsforgeets.backend.CourseContent.service.CourseContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/coursecontent")
@CrossOrigin
public class CourseContentController {

    @Autowired
    CourseContentService courseContentService;

    @PostMapping("/courseContentByCourse")
    public List<CourseContent> getContentByCourse(@RequestBody long course_id){
        return courseContentService.getContentByCourse(course_id);
    }

    @PostMapping("/addCourseContent")
    public String addCourseContent(@RequestBody List<CourseContent> contents){
        return courseContentService.addContent(contents);
    }   
}
