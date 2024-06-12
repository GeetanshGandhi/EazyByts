import './App.css';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Footer } from './Components/Footer';
import Explore from './Components/Explore';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { Bounce, ToastContainer } from 'react-toastify';
import CourseContent from './Components/CourseContent';
import CuratedByYou from './Components/CuratedByYou';
import AddACourse from './Components/AddACourse';
import AddCourseContentList from './Components/AddCourseContentList';
import Home from './Components/Home';


function App() {
	const logindata = JSON.parse(localStorage.getItem("loginUserData"));
	//handling course addition
	let initialContent = [];
	if(localStorage.getItem("initCourseContent") === null || !localStorage.getItem("initCourseContent")){
		initialContent = [];
	}else{
		initialContent = JSON.parse(localStorage.getItem("initCourseContent"));
	}
	//form vars
	const [courseTitle, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const [content, setcontent] = useState(initialContent);
	const [contentTitle, setContentTitle] = useState('');
	const [contentType, setContentType] = useState('Video');
	const [contentLink, setContentLink] = useState('');

	const addContentToCourse = (e) => {
		e.preventDefault();
		if(!contentTitle || !contentLink|| !contentType){
			toast.error("Empty Field(s)!");
			return;
		}
		const item = {
			title:contentTitle, link: contentLink, type: contentType, course_id:0
		}
		setcontent([...content, item]);
		localStorage.setItem("initcourseContent", JSON.stringify(content));
	}
	const handleDeleteContent = (item) => {
		//deleting course content from list
		setcontent(content.filter((element)=>{
			return element!== item;
		}));
		localStorage.setItem("initCourseContent", JSON.stringify(content));
	}
	useEffect(()=>{
		localStorage.setItem("initCourseContent", JSON.stringify(content));
	},[content])

	
	const router = createHashRouter([
		{
			path:'/', element:<><Navbar/><Home/><Footer/></>
		},
		{
			path:'/explore', element:<><Navbar/><Explore/><Footer/></>
		},
		{
			path:'/login', element:<><Navbar/><Login/><Footer/></>
		},
		{
			path:'/signup', element:<><Navbar/><Signup/><Footer/></>
		},
		{
			path:'/courseContent', element:<><Navbar/><CourseContent/><Footer/></>
		},
		{
			path:'/curatedByYou',element:<><Navbar/><CuratedByYou/><Footer/></>
		},
		{
			path:'/addCourse', element:<><Navbar/><AddACourse content={content} logindata={logindata} courseTitle={courseTitle} setTitle={setTitle} desc={desc} setDesc={setDesc} contentTitle={contentTitle} setcontent={setcontent} setContentTitle={setContentTitle} contentLink={contentLink} setContentLink={setContentLink} setContentType={setContentType} addContentToCourse={addContentToCourse} /><AddCourseContentList content={content} handleDeleteContent={handleDeleteContent}/><Footer/></>
		},
		{
			path:'/viewCourseContent', element:<><Navbar/><CourseContent/><Footer/></>
		}
	]);
	return (
		<div>
			<RouterProvider router = {router}/>
			<ToastContainer position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss={false}
                        draggable
                        pauseOnHover
                        theme="light"
                        transition= {Bounce}/>
		</div>
	);
}
export default App;
