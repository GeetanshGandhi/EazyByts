package com.geetsforgeets.backend.CourseContent.service;

import com.geetsforgeets.backend.CourseContent.model.CourseContent;
import com.geetsforgeets.backend.CourseContent.repository.CourseContentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CourseContentServiceImpl implements CourseContentService {
    @Autowired
    CourseContentRepository courseContentRepository;

    @Override
    public List<CourseContent> getContentByCourse(long course_id) {
        List<CourseContent> all = courseContentRepository.findAll();
        List<CourseContent> output = new ArrayList<>();
        for(CourseContent i:all){
            if(i.getCourse_id() == course_id) output.add(i);
        }
        return output;
    }

    @Override
    public String addContent(List<CourseContent> contents) {
        courseContentRepository.saveAll(contents);
        return "success";
    }
}
