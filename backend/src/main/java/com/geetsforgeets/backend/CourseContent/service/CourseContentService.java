package com.geetsforgeets.backend.CourseContent.service;

import com.geetsforgeets.backend.CourseContent.model.CourseContent;

import java.util.List;

public interface CourseContentService {
    List<CourseContent> getContentByCourse(long course_id);
    String addContent(List<CourseContent> contents);

}
