"use client";
import "./Footer.css";
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";
import images from "../../public";
import { Discover, HelpCenter } from "../Navbar/navbar_export";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_box">
        <div className="footer_box_social">
          <Image src={images.logo} alt="logo" height={120} width={120} />
          <p>
            The world's first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital assets.
          </p>
          <div className="footer_social">
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
        </div>
        <div className="footer_box_discover">
          <h3>Discover</h3>
          <Discover />
        </div>
        <div className="footer_box_help">
          <h3>Help Center</h3>
          <HelpCenter />
        </div>
        <div className="subscribe">
          <h3>Subscribe</h3>
          <div className="subscribe_box">
            <input type="email" placeholder="Enter your email" />
            <RiSendPlaneFill className="subscribe_box_send" />
          </div>
          <div className="subscribe_box_info">
            <p>
              Discover, collect, and sell extraordinary NFTs OpenSea is the
              first and largest NFT marketplace
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
