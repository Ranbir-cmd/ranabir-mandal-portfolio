import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../assets/RanabirMandalResumePdf.pdf";

const Social = () => {
  return (
    <div className="fixed top-[30%] sm:right-6 right-3">
      <ul className="flex flex-col gap-6">
        <li className="relative group text-2xl sm:text-3xl bg-[#3b5998] text-white p-2 rounded-full hover:scale-125 duration-300 cursor-pointer">
          <div className="hidden lg:block absolute right-14 bottom-1 group-hover:opacity-80 duration-300 opacity-0 py-2 px-3 bg-[#3b5998] rounded-full">
            <p className="text-base">LinkedIN</p>
          </div>
          <a
            href="https://www.linkedin.com/in/ranabir-mandal-b2859b189/"
            target={"_blank"}
          >
            <FaLinkedin />
          </a>
        </li>

        <li className="relative group text-2xl sm:text-3xl bg-[#171515] text-white p-2 rounded-full hover:scale-125 duration-300 cursor-pointer">
          <div className="hidden lg:block absolute right-14 bottom-1 group-hover:opacity-80 duration-300 opacity-0 py-2 px-3 bg-[#171515] rounded-full">
            <p className="text-base">Github</p>
          </div>
          <a href="https://github.com/Ranbir-cmd" target={"_blank"}>
            <FaGithub />
          </a>
        </li>

        <li className="relative group text-2xl sm:text-3xl bg-[#4285F4] text-white p-2 rounded-full hover:scale-125 duration-300 cursor-pointer">
          <div className="hidden lg:block absolute right-14 bottom-1 group-hover:opacity-80 duration-300 opacity-0 py-2 px-3 bg-[#4285F4] rounded-full">
            <p className="text-base">Mail</p>
          </div>
          <a href="mailto:mranbir07@gmail.com" target={"_blank"}>
            <HiOutlineMail />
          </a>
        </li>

        <li className="relative group text-2xl sm:text-3xl bg-[#C4302B] text-white p-2 rounded-full hover:scale-125 duration-300 cursor-pointer">
          <div className="hidden lg:block absolute right-14 bottom-1 group-hover:opacity-80 duration-300 opacity-0 py-2 px-3 bg-[#C4302B] rounded-full">
            <p className="text-base">Resume</p>
          </div>
          <a href={resume} download="Ranabir Mandal Resume">
            <BsFillPersonLinesFill />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
