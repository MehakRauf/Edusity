import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;
    const moveForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const moveBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    return (
        <div className='testimonials container' id='testimonials'>
            <img src={next_icon} alt="" className='next-btn' onClick={moveForward} />
            <img src={back_icon} alt="" className='back-btn' onClick={moveBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div >
                                    <h3>Mehak Fatima</h3>
                                    <span>Edusity, Paris</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of
                                the best decisions I've ever made. The supportive
                                community, state-of-the-art facilities, and commitment
                                to academic excellence have truly exceeded my
                                expectations.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div >
                                    <h3>Zohaib Ahmed</h3>
                                    <span>Edusity, Paris</span>
                                </div>
                            </div>
                            <p>Attending Edusity has been a transformative experience for me.
                                The faculty are incredibly knowledgeable and genuinely care about student success.
                                The collaborative atmosphere encourages engagement and makes learning enjoyable.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div >
                                    <h3>Tahrim Bilal</h3>
                                    <span>Edusity, Paris</span>
                                </div>
                            </div>
                            <p>Edusity stands out for its commitment to student success.
                                The community is vibrant and supportive, making it
                                easy to connect with peers and professors alike.
                                The facilities are top-notch, providing a great environment
                                for both studying and relaxation
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div >
                                    <h3>Hassan Ali</h3>
                                    <span>Edusity, Paris</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of
                                the best decisions I've ever made. The supportive
                                community, state-of-the-art facilities, and commitment
                                to academic excellence have truly exceeded my
                                expectations.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials