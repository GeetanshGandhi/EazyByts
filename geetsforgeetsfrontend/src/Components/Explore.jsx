import React, { useEffect, useState } from 'react'
import './Explore.css';
import CourseItem from './CourseItem';
export default function Explore(props) {
	const [courses, setCourses] = useState([]);
	useEffect(()=>{
		fetch((process.env.REACT_APP_BACKEND_URL+"api/v1/courses/getAll"))
        .then(res=>res.json())
        .then((result)=>{
            setCourses(result);
        })
	},[])
	return (
		<div className='home-page'>
			<p className='home-head'>Explore courses:</p>
			<div className="course-list">
				{
					courses.map((course)=>{
						return <CourseItem course={course} handleViewCourse={props.handleViewCourse}/>
					})
				}
			</div>
		</div>
	)
}
