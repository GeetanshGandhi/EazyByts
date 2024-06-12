import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
export default function Home() {
    const nav = useNavigate();
    return (
        <div className='home-container'>
            <div className="home-in-container">
                <p className="home-head">Welcome to GeetsForGeets!</p>
                <p className="home-matter">
Welcome to GeetsForGeets, an open-source e-learning platform offering free courses created by top educators from around the globe. Our mission is to make high-quality education accessible to everyone, regardless of geographical or financial barriers.
<br/><br/>
Each course on OpenLearn is meticulously curated by dedicated educators who compile the best free resources available online, ensuring a comprehensive and cohesive learning experience. This curated approach guarantees that learners receive top-notch education without the hassle of sifting through countless materials.
<br/><br/>
Join our community of lifelong learners today and take advantage of a wealth of knowledge at your fingertips. With GeetsForGeets, your educational journey is just a click away.
                </p>
                <div className="wrapper">
                    <button className='explore-button' onClick={()=>{nav("/explore")}}>Start your journey</button>
                </div>
            </div>

        </div>
    )
}
