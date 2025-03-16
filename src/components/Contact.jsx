import React from "react";
import { MdEmail } from "react-icons/md";
import { SiTistory } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import "../styles/components/Contact.scss";
import profileImg from "../assets/profile.png";

const ContactSection = () => {
  return (
    <div className="contact-container">
      {/* 왼쪽: 원형 프로필 이미지 */}
      <div className="profile-image">
        <img src={profileImg} alt="Profile" />
      </div>

      {/* 오른쪽: Contact 정보 */}
      <div className="contact-info">
        <h2 className="contact-title">Contact.</h2>
        <div className="contact-item">
          <MdEmail className="icon" />
          <p>young170627@gmail.com</p>
        </div>

        <h2 className="contact-title">Channel.</h2>
        <div className="contact-item">
          <FaGithub className="icon" />
          <a href="https://github.com/sunyoung-park" target="_blank" rel="noopener noreferrer">
            github.com/sunyoung-park
          </a>
        </div>
        <div className="contact-item">
          <SiTistory className="icon" />
          <a href="https://ruriruriya.tistory.com/" target="_blank" rel="noopener noreferrer">
            ruriruriya.tistory.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;