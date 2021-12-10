import React from "react"
import { StyledHome } from './Home.styled'

const Home = () => {

    return (
        <StyledHome>
            <section className="home-landing">
                <div className="case-study-main">
                    
                </div>
                <div className="case-study-row">
                    <div className="case-study-minor">
                        <div className="case-study-thumbnail">
                            <p>Hello</p>
                        </div>
                    </div>
                    <div className="case-study-minor">
                        <div className="case-study-thumbnail">
                            <p>Hello</p>
                        </div>
                    </div>
                    <div className="case-study-minor">
                        <div className="case-study-thumbnail">
                            <p>Hello</p>
                        </div>
                    </div>
                </div>
            </section>
        </StyledHome>
    );
}

export default Home;