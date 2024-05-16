import Image from "next/image";
import Style from "./Notification.css";
import images from "../../../public";

const Notification = () => {
  return (
    <div className="notification">
      <p>Notification</p>
      <div className="notification_box">
        <div className="notification_box_img">
          <Image
            src={images.user1}
            alt="profile_img"
            width={50}
            height={50}
            className="notification_box_img"
          />
        </div>
        <div className="notification_box_info">
          <h4>Akash Laha</h4>
          <p>Measure action your user...</p>
          <small>3 minutes</small>
        </div>
        <span className="notification_box_new"></span>
      </div>
    </div>
  );
};

export default Notification;
