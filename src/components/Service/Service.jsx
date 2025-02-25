import Image from "next/image";
import "./Service.css";
import images from "../../public";

const Service = () => {
  return (
    <div className="service">
      <div className="service_box">
        <div className="service_box_item">
          <Image
            src={images.service1}
            alt="Filter & Discover"
            width={100}
            height={100}
          />
          <p className="service_box_item_step">
            <span>Step 1</span>
          </p>
          <h3>Filter & Discover</h3>
          <p>
            Connect with wallet, discover, buy NTFs, sell your NFTs and earn
            money
          </p>
        </div>
        <div className="service_box_item">
          <Image
            src={images.service2}
            alt="Filter & Discover"
            width={100}
            height={100}
          />
          <p className="service_box_item_step">
            <span>Step 1</span>
          </p>
          <h3>Filter & Discover</h3>
          <p>
            Connect with wallet, discover, buy NTFs, sell your NFTs and earn
            money
          </p>
        </div>
        <div className="service_box_item">
          <Image
            src={images.service3}
            alt="Connect Wallet"
            width={100}
            height={100}
          />
          <p className="service_box_item_step">
            <span>Step 1</span>
          </p>
          <h3>Connect Wallet</h3>
          <p>
            Connect with wallet, discover, buy NTFs, sell your NFTs and earn
            money
          </p>
        </div>
        <div className="service_box_item">
          <Image
            src={images.service1}
            alt="Filter & Discover"
            width={100}
            height={100}
          />
          <p className="service_box_item_step">
            <span>Step 1</span>
          </p>
          <h3>Start trading</h3>
          <p>
            Connect with wallet, discover, buy NTFs, sell your NFTs and earn
            money
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
