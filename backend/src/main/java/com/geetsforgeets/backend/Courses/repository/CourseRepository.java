package com.geetsforgeets.backend.Courses.repository;

import com.geetsforgeets.backend.Courses.model.Courses;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<Courses, Long> {
}
