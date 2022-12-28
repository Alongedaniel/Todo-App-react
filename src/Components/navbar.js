import React from "react";

const Navbar = () => {

    const style = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem",
        backgroundColor: "#000"
    }
    return (
        <div style={style}>
            <h1>Alonge</h1>
            <nav>
                <ul style={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "50vw",
                    listStyle: "none"
                }}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Store</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar