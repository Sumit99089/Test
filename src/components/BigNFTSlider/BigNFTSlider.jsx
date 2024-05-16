"use client";
import Image from "next/image";
import "./BigNFTSlider.css";
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";
import images from "../../public";
import Button from "../Button/Button";
import { useCallback, useState } from "react";

const BigNFTSlider = () => {
  const [idNumber, setIdNumber] = useState(1);

  const sliderData = [
    {
      title: "Hello NFT",
      id: 1,
      name: "Scybertruck",
      collection: "GYm",
      price: "00664 ETH",
      like: 243,
      image: images.user3,
      nftImage: images.nft1,
      time: {
        days: 21,
        hours: 40,
        minutes: 81,
        seconds: 15,
      },
    },
    {
      title: "Buddy NFT",
      id: 2,
      name: "yachit",
      collection: "Home",
      price: "0000004 ETH",
      like: 243,
      image: images.user2,
      nftImage: images.nft2,
      time: {
        days: 77,
        hours: 11,
        minutes: 21,
        seconds: 45,
      },
    },
    {
      title: "Gym NFT",
      id: 3,
      name: "Board Ape",
      collection: "GYm",
      price: "0000064 ETH",
      like: 243,
      image: images.user3,
      nftImage: images.nft5,
      time: {
        days: 37,
        hours: 20,
        minutes: 11,
        seconds: 55,
      },
    },
    {
      title: "Home NFT",
      id: 4,
      name: "NFT",
      collection: "GYm",
      price: "4664 ETH",
      like: 243,
      image: images.user4,
      nftImage: images.nft4,
      time: {
        days: 87,
        hours: 29,
        minutes: 10,
        seconds: 15,
      },
    },
    {
      title: "Goa NFT",
      id: 4,
      name: "Roy",
      collection: "GYm",
      price: "4664 ETH",
      like: 243,
      image: images.user5,
      nftImage: images.nft3,
      time: {
        days: 87,
        hours: 29,
        minutes: 10,
        seconds: 15,
      },
    },
  ];

  const inc = useCallback(() => {
    if (idNumber + 1 < sliderData.length) {
      setIdNumber(idNumber + 1);
    }
  }, [idNumber, sliderData.length]);

  //-------DEC
  const dec = useCallback(() => {
    if (idNumber > 0) {
      setIdNumber(idNumber - 1);
    }
  }, [idNumber]);

  return (
    <div className="bigNFTSlider">
      <div className="bigNFTSlider_box">
        {/*  Left Side */}
        <div className="bigNFTSlider_box_left">
          <h2>{sliderData[idNumber].title}</h2>
          {/* Left creator */}
          <div className="bigNFTSlider_box_left_creator">
            <div className="bigNFTSlider_box_left_creator_profile">
              <Image
                className="bigNFTSlider_box_left_creator_profile_img"
                src={sliderData[idNumber].image}
                alt="profile image"
                width={50}
                height={50}
              />
              <div className="bigNFTSlider_box_left_creator_profile_info">
                <p>Creator</p>
                <h4>
                  {sliderData[idNumber].name}
                  <span>
                    <MdVerified />
                  </span>
                </h4>
              </div>
            </div>
            <div className="bigNFTSlider_box_left_creator_collection">
              <AiFillFire className="bigNFTSlider_box_left_creator_collection_icon" />
              <div className="bigNFTSlider_box_left_creator_collection_info">
                <p>Collection</p>
                <h4>{sliderData[idNumber].collection}</h4>
              </div>
            </div>
          </div>
          {/* Left bidding */}
          <div className="bigNFTSlider_box_left_bidding">
            <div className="bigNFTSlider_box_left_bidding_box">
              <small>Currect Bid</small>
              <p>
                {sliderData[idNumber].price} <span>$2221,000</span>
              </p>
            </div>
            <p className="bigNFTSlider_box_left_bidding_box_auction">
              <MdTimer className="bigNFTSlider_box_left_bidding_box_icon" />
              <span>Auction ending in</span>
            </p>
            <div className="bigNFTSlider_box_left_bidding_box_timer">
              <div className="bigNFTSlider_box_left_bidding_box_timer_item">
                <p>{sliderData[idNumber].time.days}</p>
                <span>Days</span>
              </div>
              <div className="bigNFTSlider_box_left_bidding_box_timer_item">
                <p>{sliderData[idNumber].time.hours}</p>
                <span>Hours</span>
              </div>
              <div className="bigNFTSlider_box_left_bidding_box_timer_item">
                <p>{sliderData[idNumber].time.minutes}</p>
                <span>Minutes</span>
              </div>
              <div className="bigNFTSlider_box_left_bidding_box_timer_item">
                <p>{sliderData[idNumber].time.seconds}</p>
                <span>Seconds</span>
              </div>
            </div>
            <div className="bigNFTSlider_box_left_button">
              <Button btnName="Place" handleClick={() => {}} />
              <Button btnName="View" handleClick={() => {}} />
            </div>
          </div>
          {/* Left slider increment Button */}
          <div className="bigNFTSlider_box_left_sliderBtn">
            <TbArrowBigLeftLines
              className="bigNFTSlider_box_left_sliderBtn_icon"
              onClick={() => dec()}
            />
            <TbArrowBigRightLine
              className="bigNFTSlider_box_left_sliderBtn_icon"
              onClick={() => inc()}
            />
          </div>
        </div>
        {/* Right Side */}
        <div className="bigNFTSlider_box_right">
          <div className="bigNFTSlider_box_right_box">
            <Image
              src={sliderData[idNumber].nftImage}
              width={680}
              height={1000}
              style={{ objectFit: "cover" }}
              alt="NFT Image"
              className="bigNFTSlider_box_right_box_img"
            />
            <div className="bigNFTSlider_box_right_box_like">
              <AiFillHeart />
              <span>{sliderData[idNumber].like}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigNFTSlider;
