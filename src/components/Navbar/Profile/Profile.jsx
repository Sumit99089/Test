import Image from "next/image";
import "./Profile.css";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownloadOff, TbDownload } from "react-icons/tb";
import images from "../../../public";
import Link from "next/link";
import styled from "styled-components";

export const Profile = () => {
  const StyledLink = styled.div`
    color: black;
    &:hover {
      color: white;
    }
  `;

  return (
    <div className="profile">
      <div className="profile_account">
        <Image
          src={images.user1}
          alt="user profile"
          width={50}
          height={50}
          className="profile_account_img"
        />
        <div className="profile_account_info">
          <p>Akash Laha</p>
          <small>X--0093-0-0-</small>
        </div>
      </div>
      <div className="prfile_menu">
        <div className="profile_menu_one">
          <div className="profile_menu_one_item">
            <FaUserAlt />
            <p>
              <Link href={{ pathname: "/myprofile" }}>
                <StyledLink>My Profile</StyledLink>
              </Link>
            </p>
          </div>
          <div className="profile_menu_one_item">
            <FaRegImage />
            <p>
              <Link href={{ pathname: "/my-items" }}>
                <StyledLink>My Item</StyledLink>
              </Link>
            </p>
          </div>
          <div className="profile_menu_one_item">
            <FaUserEdit />
            <p>
              <Link href={{ pathname: "/edit-profile" }}>
                <StyledLink>Edit Profile</StyledLink>
              </Link>
            </p>
          </div>
        </div>
        <div className="profile_menu_two">
          <div className="profile_menu_one_item">
            <MdHelpCenter />
            <p>
              <Link href={{ pathname: "/help" }}>
                <StyledLink>Help</StyledLink>
              </Link>
            </p>
          </div>
          <div className="profile_menu_one_item">
            <TbDownload />
            <p>
              <Link href={{ pathname: "/disconnect" }}>
                <StyledLink>Disconnect</StyledLink>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
