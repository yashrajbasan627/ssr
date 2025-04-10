import React from "react";

export const Header:React.FC = () => {
    const toggleTheme = () => {
        console.log("toggle theme")
    };
    return (
        <header>
        <h1>My Blog</h1>
            <button onClick={() => {
                console.log("hello")
        }}>Toggle Theme</button>
    </header>
    )
}

