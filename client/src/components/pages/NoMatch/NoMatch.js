import React from "react"
import { useLocation } from "react-router-dom";
import { StyledNoMatch } from './NoMatch.styled'


const NoMatch = () => {
    let location = useLocation();

    return (
        <StyledNoMatch>
            <div className="screen-404">
                <h1>404</h1>
                <h3>
                    No match for <code>{location.pathname}</code>
                </h3>
            </div>
        </StyledNoMatch>
    );
}

export default NoMatch;