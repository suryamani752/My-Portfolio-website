import React from "react";
import "./Menu.css";
import profile from "../../images/Picture1.png";
import { Link } from "react-scroll";
import {
  FcHome,
  FcAbout,
  FcBiotech,
  FcReadingEbook,
  FcBusinessContact,
} from "react-icons/fc";
import { TbCertificate } from "react-icons/tb";

const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="profile-pic">
            <img src={profile} alt="profile-photo" />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome /> Home
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout /> About
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="educations"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcReadingEbook /> Education
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="tech"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBiotech /> Tech Stack
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="certificates"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <TbCertificate /> Certificate
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBusinessContact /> Contact
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="educations"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcReadingEbook />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="tech"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBiotech />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="certificates"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <TbCertificate />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBusinessContact />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
