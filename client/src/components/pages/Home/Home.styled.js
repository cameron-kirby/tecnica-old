import styled from "styled-components"

export const StyledHome = styled.div`
    .home-landing {
        height: 100vh;
        background-color: var(--green);

        .case-study-main {
            height: 65vh;
            padding: 30px var(--margin-width);

        }

        .case-study-row {
            padding-right: var(--margin-width);
            display: flex;

        
            .case-study-minor {
                padding-left: var(--margin-width);
                height: 30vh;
                width: calc(100% / 3);

                .case-study-thumbnail {
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background: linear-gradient(135deg, orange 50%, cyan);
                }
            }
        }
    }
`