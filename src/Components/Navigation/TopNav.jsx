import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./TopNav.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CallIcon from "@mui/icons-material/Call";
import SocialLinks from "./SocialLinks";


const TopNav = () => {

    const [musicMenu, setMusicMenu] = useState(false);

    const toggleMusicMenu = () => {
        setMusicMenu(!musicMenu);
        document.querySelector("body").classList.toggle("body-overflow-visible");
    };

    return (
        <nav className="music_nav">
            <div className="music_smartphone">
                <div className="music_nav_elements">
                    <div className="music_menu_icon x_y_axis_center">

                        <div className="only-mobile mobile-menu-button-wrapper">
                            <button
                                className={`hamburger hamburger--3dx x_y_axis_center ${musicMenu ? "is-active" : ""
                                    }`}
                                type="button"
                                onClick={toggleMusicMenu}
                            >
                                <span className="hamburger-box">
                                    <span className="hamburger-inner"></span>
                                </span>
                            </button>
                        </div>

                    </div>

                    <div
                        className={`music_navigation_section ${musicMenu ? "ovverlay" : ""
                            }`}
                    >
                        <div className="music_navigation_element empty_element">
                            <NavLink to="/Home"></NavLink>
                        </div>
                        <div className="music_navigation_element">
                            <NavLink to="/Home">Home</NavLink>
                        </div>
                        <div className="music_navigation_element">
                            <NavLink to="/Home">Services</NavLink>
                        </div>
                        <div className="music_navigation_element">
                            <NavLink to="/Home">Videos</NavLink>
                        </div>
                        <div className="music_navigation_element">
                            <NavLink to="/Home">Blog</NavLink>
                        </div>
                        <div className="music_navigation_element">
                            <NavLink to="/Home">Contact</NavLink>
                        </div>
                        <SocialLinks />
                        {/* <div className="music_navigation_element">
                            <NavLink to="/Home">About</NavLink>
                        </div>
                        <div className="music_navigation_element empty_element">
                            <NavLink to="/Home"></NavLink>
                        </div>
                        <div className="music_navigation_element empty_element">
                            <NavLink to="/Home"></NavLink>
                        </div> */}
                    </div>

                    <div className="music_logo">
                        <div className="music_circle"></div>
                        <h3>
                            nirvana guitar
                            <br />
                            classes
                        </h3>
                    </div>

                    <div className="music_for_desktop">
                        <div className="desktop_elements">
                            <NavLink to="/Home">Home</NavLink>
                        </div>
                        <div className="desktop_elements">
                            <NavLink to="/Home">Services</NavLink>
                        </div>
                        <div className="desktop_elements">
                            <NavLink to="/Home">Videos</NavLink>
                        </div>
                        <div className="desktop_elements">
                            <NavLink to="/Home">Blog</NavLink>
                        </div>
                        <div className="desktop_elements">
                            <NavLink to="/Home">Contact</NavLink>
                        </div>
                        <div className="desktop_elements">
                            <NavLink to="/Home">About</NavLink>
                        </div>
                    </div>

                    <div className="music_about x_y_axis_center">
                        <NavLink to="/MusicAbout" className="x_y_axis_center">
                            <AccountCircleIcon />
                        </NavLink>
                    </div>
                </div>

                <div className="call_animate x_y_axis_center">
                    <a
                        href="tel:+918999677343"
                        className="music_links call x_y_axis_center"
                    >
                        <CallIcon />
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default TopNav;


