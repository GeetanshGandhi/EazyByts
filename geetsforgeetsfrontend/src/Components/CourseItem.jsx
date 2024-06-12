import React from 'react'
import './Explore.css';
import { Link } from 'react-router-dom';
export default function CourseItem(props) {
	return (
		<div className="course-item">
			<p className='course-title'>{props.course.course_name}</p>
			<p className="instructor">Curated by: {props.course.instructor}</p>
			<p className='description'>{props.course.description}</p>
			<div className="btns">
				<Link className="viewcourse-link" to="/ViewCourseContent" state={{course_id: props.course.course_id, course_name:props.course.course_name, instructor:props.course.instructor, description: props.course.description}}><p>View Course</p></Link>
			</div>
		</div>
	)
}
