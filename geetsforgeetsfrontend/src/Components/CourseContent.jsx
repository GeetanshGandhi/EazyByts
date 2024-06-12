import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import './CourseContent.css';
import CourseContentItem from './CourseContentItem';
export default function CourseContent() {
	const { state } = useLocation(); 
	const [courseContent, setCourseContent] = useState([]);
	const logindata = localStorage.getItem("loginUserData");
	useEffect(()=>{
	if(logindata!=null){
		fetch(process.env.REACT_APP_BACKEND_URL+"api/v1/coursecontent/courseContentByCourse",{
	        headers:{"content-type":"application/json"},
	        body: state.course_id,
	        method:"POST"
	    })
	    .then((res)=>res.json())
	    .then(data=>{
	        setCourseContent(data);
	    })
	}
	},[])
	
	return (
		<>
		{
			logindata!==null?
			<div className='content-container'>
				<h1 className='content-title'>{state.course_name}</h1>
				<p className='instructor'>Curated by: {state.instructor}</p>
				<p className='content-desc'>{state.description}</p>
				<div className="content-list">
					{
						courseContent.map((contentItem)=>{
							return <CourseContentItem contentItem={contentItem}/>
						})
					}
				</div>
			</div>
			:
			<div className="nologin-message">
				<p>You need to login to view course!</p>
			</div>
		}
		</>
	)
}
