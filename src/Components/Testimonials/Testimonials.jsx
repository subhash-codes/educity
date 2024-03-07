import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/img/next-icon.png'
import back_icon from '../../assets/img/back-icon.png'
import user_1 from '../../assets/img/user-1.png'
import user_2 from '../../assets/img/user-2.png'
import user_3 from '../../assets/img/user-3.png'
import user_4 from '../../assets/img/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx= 0;

    const slideForward = () =>{
        if(tx> -50){
            tx -=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
        
    }

    const slideBackward = () =>{

        if(tx < 0){
            tx +=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    

    }

  return (
    <div className="testimonials">
        <img src={next_icon}alt="" className='next-btn' onClick ={slideForward}/>
        <img src={back_icon}alt="" className='back-btn' onClick ={slideBackward}/>

        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3> Subhash Ramteke</h3>
                                <span> Educity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to persue my degree at Educity was one of the best decision i've ever made. The supportive community, state of the art facilities,and commitment to acadmic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3> Subhash Ramteke</h3>
                                <span> Educity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to persue my degree at Educity was one of the best decision i've ever made. The supportive community, state of the art facilities,and commitment to acadmic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3> Subhash Ramteke</h3>
                                <span> Educity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to persue my degree at Educity was one of the best decision i've ever made. The supportive community, state of the art facilities,and commitment to acadmic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3> Subhash Ramteke</h3>
                                <span> Educity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to persue my degree at Educity was one of the best decision i've ever made. The supportive community, state of the art facilities,and commitment to acadmic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials