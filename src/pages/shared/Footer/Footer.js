import React from "react";
import { Link } from "react-router-dom";
import footerImg from "../../../assets/images/footer.png";
const Footer = () => {
  return (
    <div>
      <footer
        className="footer px-14"
        style={{
          background: `url(${footerImg})`,
        }}
      >
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
      <footer className="footer footer-center p-4 my-6 text-base-content">
        <div>
          <p>Copyright © 2022 - All right reserved by </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
