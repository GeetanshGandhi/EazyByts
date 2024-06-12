import React, { useEffect, useState } from 'react'
import CourseItem from './CourseItem';
import "./CuratedByYou.css"
export default function CuratedByYou() {
	const loginusername = JSON.parse(localStorage.getItem("loginUserData")).user_name;
	const [mycourselist, setmycourselist] = useState([]);
	useEffect(()=>{
		fetch(process.env.REACT_APP_BACKEND_URL+"api/v1/courses/getByInstructor", {
		headers: { "content-type": "application/json" },
		body: loginusername,
		method: "POST"
	})
		.then((res) => res.json())
		.then(data => {
			setmycourselist(data);
		})
	})
	return (
		<div className="curated-container">
			<p className='mycourses-title'>Courses curated by <u>{loginusername}</u></p>
			<p className='mycourses-subhead'>{mycourselist.length} courses curated by you:</p>
			<div className="course-list">
				{
					mycourselist.map((course)=>{
						return <CourseItem course={course}/>
					})
				}
			</div>
		</div>
	)
}
