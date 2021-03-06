import React from "react"
import { Link } from "react-router-dom";
import { StyledHome } from './Home.styled'

// Icons
import { Briefcase, Face, Calendar, Component } from '@styled-icons/boxicons-solid'

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

const gridBg = {
    backgroundImage: "url('https://via.placeholder.com/500')",
};
const gridWide = {
    backgroundImage: "url('https://via.placeholder.com/300x100')",
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
                <div className="container-fluid">
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
            <section className="recent">
                <div className="container-fluid">
                    <div className="grid">
                        <div className="grid__cell">
                            <Link to='/' className="card__link">
                                <div className="card__post">
                                    <div className="card__img" style={gridBg}></div>
                                    <div className="card__details">
                                        <h4 className="card__type">News</h4>
                                        <h3 className="card__title">Hello this is a card title</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="grid__cell--wide">
                            <Link to='/' className="card__link">
                                <div className="card__post">
                                    <div className="card__img" style={gridWide}></div>
                                    <div className="card__details">
                                        <h4 className="card__type">News</h4>
                                        <h3 className="card__title">Hello this is a card title</h3>
                                        <p className="card__body">This is a card body</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="grid__cell">
                            <Link to='/' className="card__link">
                                <div className="card__post">
                                    <div className="card__img" style={gridBg}></div>
                                    <div className="card__details">
                                        <h4 className="card__type">News</h4>
                                        <h3 className="card__title">Hello this is a card title</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="grid__cell--wide">
                            <Link to='/' className="card__link">
                                <div className="card__post">
                                    <div className="card__img" style={gridWide}></div>
                                    <div className="card__details">
                                        <h4 className="card__type">News</h4>
                                        <h3 className="card__title">Hello this is a card title</h3>
                                        <p className="card__body">This is a card body</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="grid__cell--wide">
                            <Link to='/' className="card__link">
                                <div className="card__post">
                                    <div className="card__img" style={gridWide}></div>
                                    <div className="card__details">
                                        <h4 className="card__type">News</h4>
                                        <h3 className="card__title">Hello this is a card title</h3>
                                        <p className="card__body">This is a card body</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="partners">
                <div className="container-fluid">
                    <div className="partners__row">
                        <h3 className="underline">
                            Partners & Clients
                            <Link to="/partners">View All</Link>
                        </h3>
                        <div className="row partners__content">
                            <div className="partners__logo">
                                <Component/>
                            </div>
                            <div className="partners__logo">
                                <Component/>
                            </div>
                            <div className="partners__logo">
                                <Component/>
                            </div>
                            <div className="partners__logo">
                                <Component/>
                            </div>
                            <div className="partners__logo">
                                <Component/>
                            </div>
                            <div className="partners__logo">
                                <Component/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </StyledHome>
    );
}

export default Home;