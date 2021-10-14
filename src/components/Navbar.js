import React from "react";
import NavbarHeader from "./NavbarHeader";
import SidebarMenu from "./SidebarMenu";
import RightNavbar from "./RightNavbar";

const Navbar = () => {
    return (
        <div className="home">
            <NavbarHeader />
            <RightNavbar />
            <div className="splitScreen">
                <div className="leftPart">
                    <SidebarMenu />
                </div>
                <div className="rightPart">{/* <RightNavbar /> */}</div>
            </div>
        </div>
    );
};

export default Navbar;
