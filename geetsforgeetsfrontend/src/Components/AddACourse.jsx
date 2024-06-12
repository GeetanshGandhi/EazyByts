import { toast } from 'react-toastify';
import './AddACourse.css';
import { useNavigate } from 'react-router-dom';
export default function AddACourse(props) {
	const navigate = useNavigate();
	const handleAddCourse = () => {
		if(props.content.length===0){
			toast.error("Add some content to the course to continue!");
			return;
		}
		if(props.courseTitle === ''){
			toast.error("Please provide a title to the Course!");
			return;
		}
		if(props.desc === ''){
			toast.error("Please provide a small description! (less than 250 characters)");
			return;
		}
		if(props.desc.length>510){
			toast.error("Length of description must be less than 510 characters!");
			return;
		}
		//creating json object for course:
		const courseToAdd = {
			course_name: props.courseTitle,
			description: props.desc,
			instructor: props.logindata.user_name
		}
		fetch(process.env.REACT_APP_BACKEND_URL+"api/v1/courses/add",{
			method: "POST",
			headers:{"content-type":"application/json"},
			body:JSON.stringify(courseToAdd)
		}).then(res=>res.json())
			.then(data=>{		
				//setting course id for each content item:
				for(let i = 0; i<props.content.length; i++){
					props.content[i].course_id = data;
				}
				fetch(process.env.REACT_APP_BACKEND_URL+"api/v1/coursecontent/addCourseContent",{
					method:"POST",
					body:JSON.stringify(props.content),
					headers:{"content-type":"application/json"}
				}).then(res=>res.text())
				  .then(data=>{
					if(data==="success"){
						toast.success("Course added Successfully!");
						props.setcontent([]);
						navigate("/explore");
					}
					else{
						toast.error("Cannot add the Course due to some reason!");
					}
				  })
			})
			

	}
	return (
		<div className='addcourse-container'>	
			{props.logindata.cat=== null || props.logindata.cat === "Student" ?
				<p>You cannot create a course!</p> :

				<div>
					<h1>Create a customized course</h1>
					<div className="wrapper">
						<div className="course-details">
							<p className='basic-details'>Basic Details</p>
							<form>
								<div className="course-input">
									<p className='form-inp-title'>Course Title</p>
									<input className='form-inp' value={props.courseTitle} onChange={(e)=>props.setTitle(e.target.value)}/>
								</div>
								<div className="course-input">
									<p className='form-inp-title'>Course Description</p>
									<p className="add-warn-msg">(Description must be less than 250 characters)</p>
									<p className="limit">Current character count: {props.desc.length}</p>
									<textarea rows="7" className='form-inp' value={props.desc} onChange={(e)=>props.setDesc(e.target.value)}/>
								</div>
							</form>
							<div className="addcontent-button">
								<button onClick={handleAddCourse}>Add Course</button>
							</div>
						</div>
						<div className="course-details">
							<p className='basic-details'>Add Content to your course</p>
							<form>
								<div className="course-input">
									<p className='form-inp-title'>Content Heading</p>
									<input className='form-inp' value={props.contentTitle} onChange={(e)=>props.setContentTitle(e.target.value)}/>
								</div>
								<div className="course-input">
									<p className='form-inp-title'>Content Link</p>
									<p className='add-warn-msg'>(Enter a valid embed link for videos)</p>
									<input className='form-inp link-font' value={props.contentLink} onChange={(e)=>props.setContentLink(e.target.value)}/>
								</div>
							</form>
							<div className="category-radio">
								<p>Type of Content:</p>
								<select className='content-type' name = "contentType" id = "content-type" onChange={(e)=>{props.setContentType(e.target.value)}}>
									<option value = "Video">Video</option>
									<option value = "Article">Article</option>
								</select>
							</div>
							<div className="addcontent-button">
								<button onClick={props.addContentToCourse}>Add Content to Course</button>
							</div>
							<p className='view-cnt-msg'>View Existing Content Below</p>
						</div>
					</div>
				</div>
			}
		</div>
  )
}

