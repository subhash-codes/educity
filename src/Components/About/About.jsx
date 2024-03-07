import React from 'react'
import './About.css'
import about_img from '../../assets/img/about.png'
import play_icon from '../../assets/img/play-icon.png'

const About = () => {
  return (
    <div className="about">
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nirturing tomorrow's Leaders Today</h2>
            <p> Embark on a transformative educational juorney with our university's comprohensive education program. our cutting-edge curriculum is design to empower students with the knowladge, skills, and experiences needed to excel in the dynamic field of education</p>
            <p>with a focus on innovation, hands-on learning, and persoonalized mentorship, our program prepare aspiring educators to make a meaningful impact in a classrooms, schools and communities.</p>
            <p>Weather you aspire to become a teacher, administrator, counsoler, or educational leader, our divers reange of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of full education. </p>
        </div>
    </div>
  )
}

export default About