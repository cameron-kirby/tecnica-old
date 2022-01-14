import styled from "styled-components"

export const StyledHome = styled.div`
    .hero-slider {
        /*padding-top: 500px;*/
        height: 100vh;
        background-color: var(--green);

        .swiper {
            height: 100%;
        }

        .swiper-slide {
            overflow: hidden;
        }
        
        .slide-inner {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 1;
            background-size: cover;
            background-position: center;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: left;

            .slide-title,
            .slide-text,
            .slide-btns {
                max-width: 690px;
            }
            /*--------------------------------------------------------------
                #button-style
            --------------------------------------------------------------*/
            .theme-btn, .theme-btn-s2{
                background-color: #ffffff;
                font-size: 20px;
                font-weight: 500;
                line-height: 1.4;
                text-align: center;
                color:#2b3b95;
                padding: 9px 32px;
                border: 0; 
                border-radius: 3px;
                text-transform: uppercase;
                display: inline-block;
                line-height: initial;
                transition:all .4s ease;
            }
            a {
                text-decoration: none;
                transition: all 0.2s ease;
            }
            .theme-btn-s2 {
                background-color: rgba(255, 255, 255, 0.9);
                color: #131e4a;
            }
            .theme-btn:hover, .theme-btn-s2:hover, .theme-btn:focus, .theme-btn-s2:focus, .theme-btn:active, .theme-btn-s2:active {
                background-color:#2b3b95 ;
                color: #fff;
            }
            .theme-btn-s3{
            font-size: 16px;
            font-weight: 500;
            line-height: 1.5;
            color: #ffffff;
            text-transform: uppercase;
            }
            i.fa-chevron-circle-right{
            height:22px;
            width:22px;
            }
            a:hover {
                text-decoration: none;
            }
            @media (max-width: 991px){
            .theme-btn, .theme-btn-s2, .theme-btn-s3 {
                font-size: 13px;
                padding: 15px 25px;
            }
            }
            @media (max-width: 767px){
            .theme-btn, .theme-btn-s2{
                padding: 13px 20px;
                font-size: 13px;
            }
            }

        }
    }
`