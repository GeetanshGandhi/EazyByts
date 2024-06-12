import React from 'react';
import './AddACourse.css';
import AddCourseContentItem from './AddCourseContentItem';
export default function AddCourseContentList(props) {
  return (
	<div className="clist-container">
	{
		(localStorage.getItem("loginUserData") === null)?<></>:
		<>
		<p className='content-list-head'>Course Items:</p>
		<div className="wrapper">
			{
				props.content.length===0?
				<p>Add items to your course to view them here!</p>:
				props.content.map((item)=>{
					return <AddCourseContentItem item = {item} onDelete={props.handleDeleteContent}/>
				})
			}
		</div>
		</>
	}
    </div>
  )
}
