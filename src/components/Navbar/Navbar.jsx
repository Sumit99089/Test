"use client";
// Nesecessary imports
import { useState } from "react";
import "./Navbar.css";
import {
  Discover,
  HelpCenter,
  Notification,
  Profile,
  Sidebar,
} from "./navbar_export.js";
import Button from "../Button/Button";
import Image from "next/image";

// Importing image
import { MdNotifications } from "react-icons/md";
import { BsSearch, bsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import images from "../../public";

const Navbar = () => {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText === "Discover") {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText === "Help Center") {
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setProfile(false);
    } else {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }
  };

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      setDiscover(false);
      setHelp(false);
      setNotification(false);
    } else {
      setProfile(false);
    }
  };

  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
    } else {
      setOpenSideMenu(false);
    }
  };

  const closeMenu = () => {
    setDiscover(false);
    setHelp(false);
    setNotification(false);
    setProfile(false);
  };

  return (
    <div className="navbar">
      <div className="navbar_container">
        {/* Start of left section */}
        <div className="navbar_container_left">
          <div className="logo" onClick={(e) => closeMenu(e)}>
            <Image src={images.logo} alt="logo" width={120} height={120} />
          </div>
          <div className="navbar_container_left_box_input">
            <div className="navbar_container_left_box_input_box">
              <input type="text" placeholder="Search NFT" />
              <BsSearch onClick={() => {}} className="search_icon" />
            </div>
          </div>
        </div>
        {/* End of left section */} {/* Start of right section */}
        <div className="navbar_container_right">
          {/* Discover */}
          <div className="navbar_container_right_discover">
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover && (
              <div className="navbar_container_right_discover_box">
                <Discover />
              </div>
            )}
          </div>
          {/* Help Center */}
          <div className="navbar_container_right_help">
            <p onClick={(e) => openMenu(e)}>Help Center</p>
            {help && (
              <div className="navbar_container_right_help_box">
                <HelpCenter />
              </div>
            )}
          </div>
          {/* Notification */}
          <div className="navbar_container_right_notify">
            <MdNotifications
              className="notify"
              onClick={() => openNotification()}
            />
            {notification && <Notification />}
          </div>
          {/* Button */}
          <div className="navbar_container_right_button">
            <Button handleClick={() => {}} btnName="Create" />
          </div>
          {/* Profile */}
          <div className="navbar_container_right_profile_box">
            <div className="navbar_container_right_profile">
              <Image
                src={images.user1}
                alt="profile"
                width={40}
                height={40}
                onClick={() => openProfile()}
                className="navbar_conatiner_right_profile_img"
              />
              {profile && <Profile />}
            </div>
          </div>
          {/* Menu Buton */}
          <div className="navbar_container_right_menuBtn">
            <CgMenuRight className="menuIcon" onClick={() => openSideBar()} />
          </div>
        </div>
        {/* End of right section */}
      </div>
      {/* Sidebar */}
      {openSideMenu && (
        <div className="sidebar">
          <Sidebar setOpenSideMenu={setOpenSideMenu} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
