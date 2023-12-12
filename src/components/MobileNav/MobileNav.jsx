import React, { useState } from "react";
import "./MobileNav.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenuFold } from "react-icons/ai";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";
import { Link } from "react-scroll";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuClick = () => {
    setOpen(false);
  };
  return (
    <>
      <>
        <div className="mobile-nav">
          <div className="mobile-nav-header">
            {open ? (
              <AiOutlineMenuFold
                size={30}
                className="mobile-nav-icon"
                onClick={handleOpen}
              />
            ) : (
              <GiHamburgerMenu
                size={30}
                className="mobile-nav-icon"
                onClick={handleOpen}
              />
            )}

            <span className="mobile-nav-title">MY PORTFOLIO</span>
          </div>
          {open && (
            <div className="mobile-nav-menu">
              <div className="nav-items">
                <div className="nav-item">
                  <div className="nav-link">
                    <Link
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                      onClick={handleMenuClick}
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
                      onClick={handleMenuClick}
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
                      onClick={handleMenuClick}
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
                      onClick={handleMenuClick}
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
                      onClick={handleMenuClick}
                    >
                      <FcVideoProjector /> Projects
                    </Link>
                  </div>
                  <div className="nav-link link-contact">
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                      onClick={handleMenuClick}
                    >
                      <FcBusinessContact /> Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    </>
  );
};

export default MobileNav;
