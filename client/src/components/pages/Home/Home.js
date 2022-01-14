import React from "react"
import { StyledHome } from './Home.styled'

// Icons
import { Briefcase, Face, Calendar } from '@styled-icons/boxicons-solid'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Parallax } from 'swiper';
import 'swiper/css'; // core Swiper
import 'swiper/css/navigation'; // Navigation module
import 'swiper/css/pagination'; // Pagination module

const background1 = {
    backgroundImage: "url('https://images.unsplash.com/photo-1579003087287-997fd4d18771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
};

const background2 = {
    backgroundImage: "url('https://images.unsplash.com/photo-1578934191836-ff5f608c2228?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80')",
};

const Home = () => {

    return (
        <StyledHome>
            <section className="hero-slider">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Parallax]}
                    loop={true}
                    slidesPerView={1}
                    navigation
                    parallax
                    speed={1000}
                    pagination={{"clickable": true}}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    <SwiperSlide>
                        <div className="slide-inner slide-bg-image" data-swiper-parallax="23%" style={background1}>
                            <div className="container">
                                <div data-swiper-parallax="300" className="slide-title">
                                    <h2>Hello! This is a slide</h2>
                                </div>
                                <div data-swiper-parallax="400" className="slide-text">
                                    <p>This is a subtitle for the slide!</p>
                                </div>
                                <div className="clearfix"></div>
                                <div data-swiper-parallax="500" className="slide-btns">
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-inner slide-bg-image" style={background2}>
                            <div className="container">
                                <div data-swiper-parallax="300" className="slide-title">
                                    <h2>Hello! This is a slide</h2>
                                </div>
                                <div data-swiper-parallax="400" className="slide-text">
                                    <p>This is a subtitle for the slide!</p>
                                </div>
                                <div className="clearfix"></div>
                                <div data-swiper-parallax="500" className="slide-btns">
                                    
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
            <section className="keystats">
                <div className="container">
                    <div className="row"> 
                        <div className="col">
                            <div className="keystat__box">
                                <div className="keystat__heading">Completed Work</div>
                                <div className="keystat__value">
                                    <div className="keystat__count-up">
                                        <span data-countup="5700">5700+</span>
                                        <span className="keystat__icon"><Briefcase/></span>
                                    </div>
                                </div>
                                <div className="keystat__subtext">PROJECTS</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="keystat__box">
                                <div className="keystat__heading">Fulltime Staff</div>
                                <div className="keystat__value">
                                    <div className="keystat__count-up">
                                        <span data-countup="50">50</span>
                                        <span className="keystat__icon"><Face/></span>
                                    </div>
                                </div>
                                <div className="keystat__subtext">EMPLOYEES</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="keystat__box">
                                <div className="keystat__heading">Experience</div>
                                <div className="keystat__value">
                                    <div className="keystat__count-up">
                                        <span data-countup="30">30</span>
                                        <span className="keystat__icon"><Calendar/></span>
                                    </div>
                                </div>
                                <div className="keystat__subtext">YEARS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </StyledHome>
    );
}

export default Home;