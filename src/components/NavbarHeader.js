import React from "react";

const NavbarHeader = () => {
    return (
        <div className="navbarHeader flex align-items">
            <div className="flex align-items">
                <h2 className="logo">
                    <span>O</span>ptome
                </h2>
                <p>ProductName</p>
            </div>
            <ul className="flex align-items">
                <li>
                    <a href="/">Home</a>
                </li>
                <li className="signUp">
                    <a href="/">SignUp</a>
                </li>
            </ul>
        </div>
    );
};

export default NavbarHeader;
