import React, { useEffect } from "react";
import "./navbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { ReactComponent as Imlogo } from "../../assets/im-logo .svg";
import { useState } from "react";
import Search from "../Search/Search.component";
import MEMBERS_DATA from "../../users";

function Navbar() {
  const [searchField, setSearchField] = useState("");
  console.log(searchField);
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilterMembers] = useState(members);

  useEffect(() => {
    setMembers(MEMBERS_DATA);
  }, []);
  console.log(members);

  useEffect(() => {
    console.log("effects is fired ");
    const newFilteredMembers = members.filter((members) => {
      return members.members.forEach((element) => {
        element.first_name.toLocaleLowerCase().includes(searchField);
      });
    });

    setFilterMembers(newFilteredMembers);
    console.log("Effect is firing");
  }, [members, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topbarLeft">
          <Imlogo className="logo" />
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            {/* <Search
              className="custom-search"
              placeholder="Search Members"
              onChangeHandler={onSearchChange}
            /> */}
            &nbsp; &nbsp;
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
          <img
            src="https://cdn.pixabay.com/photo/2018/01/09/15/18/ornament-3071827_640.png"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
