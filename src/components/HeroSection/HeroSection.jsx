"use client";
import "./HeroSection.css";
import Image from "next/image";
import Button from "../Button/Button";
import images from "../../public";

const HeroSection = () => {
  return (
    <div className="heroSection">
      <div className="heroSection_box">
        <div className="heroSection_box_left">
          <h1>
            Discover, <br /> collect, and <br />
            sell NFTs 🖼️
          </h1>
          <p>
            Discover the most outstanding NTFs in all topics of life. <br />{" "}
            Creative your NTFs and sell them
          </p>
          <Button btnName="Start your search" />
        </div>
        <div className="heroSection_box_right">
          <Image
            src={images.hero}
            alt="Hero section"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
