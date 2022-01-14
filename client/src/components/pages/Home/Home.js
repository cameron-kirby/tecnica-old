import React from "react"
import { StyledHome } from './Home.styled'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Navigation, Pagination, Parallax } from 'swiper';
import 'swiper/swiper.min.css'; // core Swiper
import 'swiper/modules/navigation/navigation.min.css'; // Navigation module
import 'swiper/modules/pagination/pagination.min.css'; // Pagination module

const background1 = {
    backgroundImage: "url('https://images.unsplash.com/photo-1578934191836-ff5f608c2228?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80')",
};

const background2 = {
    backgroundImage: "url('https://images.unsplash.com/photo-1579003087287-997fd4d18771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
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
                                    <a href="#" className="theme-btn-s2">Learn more</a>
                                    <a href="#" className="theme-btn-s3"><i className="fas fa-chevron-circle-right"></i>Get Info</a>
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
                                    <a href="#" className="theme-btn-s2">Learn more</a>
                                    <a href="#" className="theme-btn-s3"><i className="fas fa-chevron-circle-right"></i>Get Info</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </StyledHome>
    );
}

export default Home;