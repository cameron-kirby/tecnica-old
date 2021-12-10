import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { StyledNavigation } from './Navigation.styled'
import { GithubSquare, Linkedin } from '@styled-icons/fa-brands'


const Navigation = ({ navOpen, setNavOpen }) => {
    const [scrollDir, setScrollDir] = useState("scrolling up");

    useEffect(() => {
        const threshold = 0;
        let lastScrollY = window.pageYOffset;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.pageYOffset;

            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }
            setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir]);

    let headerColor = "transparent"
    let textColor = "white"

    if (useLocation().pathname === "/work") {
        headerColor = "white"
        textColor = "black"
    }
    if(useLocation().pathname === "/profile") {
        headerColor = "black"
        textColor = "white"
    }


    const handleMenuToggle = () => {
        setNavOpen(prevNavOpen => !prevNavOpen)
    }

    return (
        <StyledNavigation navOpen={navOpen} headerColor={headerColor} textColor={textColor} scrollDir={scrollDir}>
            <div className="header">
                <Link to="/" className="logo" onClick={navOpen ? handleMenuToggle:undefined}>TECNICA</Link>
            </div>
            <div className="nav-toggle" onClick={handleMenuToggle}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="overlay">
                <div className="overlay-content">
                    <div className="menu-items">
                        <Link to="/work" onClick={handleMenuToggle} className={(useLocation().pathname==="/work") ? "isActive": ""}>Work</Link>
                        <Link to="/profile" onClick={handleMenuToggle} className={(useLocation().pathname==="/profile") ? "isActive": ""}>Profile</Link>
                        <Link to="/journal" onClick={handleMenuToggle} className={(useLocation().pathname==="/journal") ? "isActive": ""}>Journal</Link>
                        <Link to="/contact" onClick={handleMenuToggle} className={(useLocation().pathname==="/contact") ? "isActive": ""}>Contact</Link>
                    </div>
                    <div className="social-media-items">
                        <a href="https://github.com/cameron-kirby" target="_blank" rel="noreferrer">
                            <GithubSquare/>
                        </a>
                        <a href="https://www.linkedin.com/in/kameroncirby/" target="_blank" rel="noreferrer">
                            <Linkedin/>
                        </a>
                    </div>
                </div>
            </div>
        </StyledNavigation>
    );
}

export default Navigation;