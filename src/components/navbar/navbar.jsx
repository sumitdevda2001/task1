import React from "react";
import "./navbar.css";
import { NotificationsNone,Language,Settings } from "@material-ui/icons";
// import {ReactComponent as Imlogo } from "../../src/assets/im-logo .svg"
import {ReactComponent as Imlogo} from "../../assets/im-logo .svg"

export default function Navbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
      <div className="topbarLeft">
      <Imlogo className="logo" />
        </div>
        <div className="topRight">
        <div className="topbarIconContainer">
        
            <span className="search">Search</span>&nbsp;&nbsp;&nbsp;
            <span className="Home">Home</span>&nbsp;&nbsp;&nbsp;
            <span className="about">About</span>&nbsp;&nbsp;&nbsp;
            <span className="Contactus">Contact Us</span>&nbsp;&nbsp;&nbsp;
            <span className="Signup">Sign Up</span>&nbsp;&nbsp;&nbsp;
            <span className="login">Login</span>

            </div>
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">10</span>
            </div>
            <div className="topbarIconContainer">
            <Settings />
            </div>
            <img src="https://cdn.pixabay.com/photo/2018/01/09/15/18/ornament-3071827_640.png" alt="" className="topAvatar" />
          </div>
        </div>
      </div>
  );
}