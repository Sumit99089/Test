"use client";
import Link from "next/link";
import "./Sidebar.css";
import { useState } from "react";
import Image from "next/image";
import { GrClose } from "react-icons/gr";
import images from "../../../public";
import Button from "../../Button/Button";
import styled from "styled-components";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
} from "react-icons/ti";

const Sidebar = ({ setOpenSideMenu }) => {
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  const discover = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "search",
    },
    {
      name: "Author Profile",
      link: "author-profile",
    },
    {
      name: "NFT details",
      link: "NFT-details",
    },
    {
      name: "Account Setting",
      link: "account-setting",
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet",
    },
    {
      name: "Blog",
      link: "blog",
    },
  ];

  const helpCenter = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "contact-us",
    },
    {
      name: "Sign Up",
      link: "sign-up",
    },
    {
      name: "Sign In",
      link: "sign-in",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];

  const openDiscoverMenu = () => {
    if (!openDiscover) {
      setOpenDiscover(true);
    } else {
      setOpenDiscover(false);
    }
  };

  const openHelpMenu = () => {
    if (!openHelp) {
      setOpenHelp(true);
    } else {
      setOpenHelp(false);
    }
  };

  const closeSideBar = () => {
    setOpenSideMenu(false);
  };

  const StyledLink = styled.div`
    color: black;
  `;

  return (
    <div className="sideBar">
      <GrClose className="sideBar_closeBtn" onClick={() => closeSideBar()} />

      <div className="sideBar_box">
        <Image src={images.logo} alt="logo" width={150} height={150} />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis,
          tenetur unde cumque ut maiores doloremque neque quisquam quasi.
          Provident aliquid vel fugiat inventore?
        </p>
      </div>
      <div className="sideBar_social">
        <a href="#">
          <TiSocialFacebook />
        </a>
        <a href="#">
          <TiSocialLinkedin />
        </a>
        <a href="#">
          <TiSocialTwitter />
        </a>
        <a href="#">
          <TiSocialYoutube />
        </a>
        <a href="#">
          <TiSocialInstagram />
        </a>
      </div>

      <div className="sideBar_menu">
        <div>
          <div className="sideBar_menu_box" onClick={() => openDiscoverMenu()}>
            <p>Discover</p>
            <TiArrowSortedDown />
          </div>
          {openDiscover && (
            <div className="sideBar_discover">
              {discover.map((el, i) => (
                <p key={i + 1}>
                  <Link href={{ pathname: `${el.link}` }}>
                    <StyledLink>{el.name}</StyledLink>
                  </Link>
                </p>
              ))}
            </div>
          )}
        </div>
        <div>
          <div className="sideBar_menu_box" onClick={() => openHelpMenu()}>
            <p>Help Center</p>
            <TiArrowSortedDown />
          </div>
          {openHelp && (
            <div className="sideBar_discover">
              {helpCenter.map((el, i) => (
                <p key={i + 1}>
                  <Link href={{ pathname: `${el.link}` }}>
                    <StyledLink>{el.name}</StyledLink>
                  </Link>
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="sideBar_button">
        <Button btnName="Create" handleClick={() => {}} />
        <Button btnName="Connect Wallet" handleClick={() => {}} />
      </div>
    </div>
  );
};

export default Sidebar;
