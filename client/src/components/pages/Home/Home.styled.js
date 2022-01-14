import styled from "styled-components"

export const StyledHome = styled.div`
    .hero-slider {
        /*padding-top: 500px;*/
        height: 90vh;
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

    .keystats {
        margin-top:-75px;
        padding-bottom: 15px;
        position:relative;
        z-index:2;

        .col {
            flex-basis: 0;
            flex-grow: 1;
            max-width: 100%;
            padding-right: 15px;
            padding-left: 15px;

            .keystat__box {
                background: #fff;
                padding: 20px;
                height: 100%;

                .keystat__heading {
                    font-size: 1rem;
                    color: #c8102e;
                    line-height: 1;
                    margin-bottom: 10px;
                            
                    &:after {
                        content: "—";
                        margin-left: 0.625em;
                        margin-right: 1em;
                        display: inline-block;
                        transform-origin: center left;
                        transform: scaleX(2);
                    }
                }

                .keystat__value {
                    font-size: 3.25rem;
                    font-weight: 700;
                    color: #343434;
                    line-height: 1;

                    .keystat__icon {
                        display: inline;
                        max-width: 40px;
                        margin-left: 20px;
                        max-height: 36px;

                        svg {
                            width: 36px;
                            height: 36px;
                            fill: gray;
                            vertical-align: unset;
                        }
                    }
                }
            }
        }
    }

    .recent {

    }

    .partners {

        .partners__row {
            padding-bottom: 40px;

            .underline {
                position: relative;
                padding-bottom: 15px;
                border-bottom: 1px solid #bababa;

                a {
                    display: block;
                    position: absolute;
                    right: 0.25rem;
                    top: 0;

                    :after {
                        content: "→";
                        transform: translateY(5%) translateX(0.25rem);
                        display: inline-block;
                        transform-origin: center left;
                        transition: all .25s ease;
                    }
                }
            }

            .partners__content {
                align-items: center;
                justify-content: center;

                .partners__logo {
                    text-align: center;
                    margin-top: 60px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    flex: 0 0 16.6666666667%;
                    max-width: 16.6666666667%;

                    svg {
                        max-width: 65%;
                        margin: auto;
                    }
                }
            }
        }
    }
`