import "./navbar.css";

import { ReactComponent as Imlogo } from "../../assets/im-logo .svg";

const Navbar = ({ searchField, onChangeSearchHandler }) => {
  return (
    <nav>
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topbarLeft">
            <Imlogo className="logo" />
          </div>
         
            <div className="topRight">
            <div className="search-box">
              <input
              type="search"
              placeholder="Search Members"
              value={searchField}
              onChange={onChangeSearchHandler}
              className="search-input"
             />
            </div>
            &nbsp;&nbsp;&nbsp;
              <div className="topbarIconContainer">
              
                <span className="Home">Home</span>&nbsp;&nbsp;&nbsp;
                <span className="about">About</span>&nbsp;&nbsp;&nbsp;
                <span className="Contactus">Contact Us</span>&nbsp;&nbsp;&nbsp;
              

            </div>

          
            {/* <img
              src="https://cdn.pixabay.com/photo/2018/01/09/15/18/ornament-3071827_640.png"
              alt=""
              className="topAvatar"
            /> */}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
