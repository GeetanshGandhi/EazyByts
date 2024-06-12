import React from 'react'
import './AddACourse.css'
export default function AddCourseContentItem(props) {
	return (
			<div className="courseitem-container">
				<p className='courseitem-title'>{props.item.title}</p>
				<div className='wrapper'>
					<a href={props.item.link} target='_blank'>
						{
							props.item.type==="Video"?
							<button className='view-item-btn'>Watch Video</button>
							:							
							<button className='view-item-btn'>View Article</button>
						}
					</a>
				</div>
				<div className='wrapper'>
					<button className='dlt-item-btn' onClick={()=>{props.onDelete(props.item)}}>Delete Item</button>
				</div>
			</div>
	)
}
