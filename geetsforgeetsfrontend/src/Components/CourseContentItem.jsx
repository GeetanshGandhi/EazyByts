import React from 'react'
import './CourseContent.css'
export default function CourseContentItem({ contentItem }) {
    return (
        <div className='contentitem-container'>
            <p className='contentitem-head'>{contentItem.title}</p>
            <div className="wrapper">
                {
                    contentItem.type==="Video"?
                    <iframe className='contentitem-iframe' src={contentItem.link} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/> :
                    <a href={contentItem.link} target="_blank">
                        <button className='article-button' >View Article</button>
                    </a>
                }
            </div>
        </div>
    )
}
