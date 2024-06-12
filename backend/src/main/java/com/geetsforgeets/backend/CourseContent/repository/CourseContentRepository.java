package com.geetsforgeets.backend.CourseContent.repository;

import com.geetsforgeets.backend.CourseContent.model.CourseContent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseContentRepository extends JpaRepository<CourseContent, Integer> {
}
