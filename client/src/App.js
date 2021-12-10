import React, { useState, useRef } from "react";
import './App.css';
import { useOnClickOutside } from "./hooks";
import { Routes, Route } from "react-router-dom";
import { Navigation, Page } from "./components"
import { Home, NoMatch } from "./components/pages"

function App() {
    const [navOpen, setNavOpen] = useState(false); // Nav state
    const node = useRef(); // Reference for clicking outside of menu to close
    useOnClickOutside(node, () => setNavOpen(false)); // Hook for closing menu when clicked out of

    return (
        <div className="App">
            <div ref={node}>
                <Navigation navOpen={navOpen} setNavOpen={setNavOpen}/>
                <Routes>
                    <Route path="*" element={
                        <Page title="CK / 404">
                            <NoMatch/>
                        </Page>
                    } />
                    <Route exact path="/" element={
                        <Page title="CK / Home">
                            <Home/>
                        </Page>
                    } />
                    
                </Routes>
            </div>
        </div>
    );
}

export default App;
