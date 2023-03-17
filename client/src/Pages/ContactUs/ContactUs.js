import React from "react";
import "./ContactUs.css";
import messenger from "./messenger.png";
import phone from "./phone.png";
import mail from "./gmail.png";
import MapGoMyCode from "./MapGoMyCode.PNG";

const ContactUs = () => {
  return (
    <div>
      <div>
        <h1 className="verstand">CONTACT US</h1>
        <div className="contain" style={{ width: "40%" }}>
          <a
            target="_blank"
            href="https://www.facebook.com/messages/"
            rel="noreferrer"
          >
            <img className="icon" src={messenger} alt="img" />
          </a>
          <a href="tel:+216-78443500">
            <img className="icon" src={phone} alt="icon" />
          </a>
          <a
            target="_blank"
            href="mailto: malekmastouri9@gmail.com"
            rel="noreferrer"
          >
            <img className="icon" src={mail} alt="img" />
          </a>
        </div>
        <h1 className="verstand">VISIT US</h1>
        <div>
          <a
            target="_blank"
            href="https://www.google.com/maps/place/GOMYCODE+Menzah+5/@36.8436781,10.169516,15z/data=!4m6!3m5!1s0x12fd359f19cff1a1:0x71a7d4d04a5b1ef2!8m2!3d36.8436781!4d10.169516!16s%2Fg%2F11qy9xm8kr"
            rel="noreferrer"
          >
            <img src={MapGoMyCode} className="icon2" alt="img" />
          </a>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default ContactUs;
