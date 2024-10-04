import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
    

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <a href="https://mail.google.com/mail/u/0/#inbox" className="flex items-center gap-1" target="blank"> <MdOutlineEmail />E-mail</a>
        </li>
        <li className="flex gap-1 items-center">
          <a href="https://www.linkedin.com/in/gabriel-lacerda-0573b5148/" className="flex items-center gap-1" target="blank"> <CiLinkedin />Linkedin</a>
        </li>
        <li className="flex gap-1 items-center">
          <a href="http://www.github.com/gabriel-lacerda918" className="flex items-center gap-1" target="blank"> <FaGithub />Github</a>
          
        </li>
      </ul>
    </div>
  );
};

export default Footer;
