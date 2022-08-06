import React from "react";

import { AiFillEye } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";

const Works = ({
  projectName,
  tech,
  backgroundImage,
  descriptionHead,
  descriptionBody,
  liveProject,
  gitProject,
}) => {
  return (
    <div>
      <div className="p-2 md:py-0">
        <p className="mb-4 text-2xl dark:text-white text-[#000] font-medium">
          {projectName}
        </p>
        <div
          style={{
            backgroundImage: backgroundImage,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="w-50% md:h-60 h-48 group rounded-md shadow-lg overflow-hidden shadow-[#040c16]"
        >
          <div className="w-full h-full bg-[#fff] text-black opacity-0 hover:opacity-100 duration-300">
            <div className="relative p-2 md:p-8 h-full w-full   font-bold">
              <p className="text-sm md:text-l lg:text-xl">{descriptionHead}</p>
              <p className="text-sm md:text-sm lg:text-base font-normal text-[#333] mt-2 md:scroll">
                {descriptionBody}
              </p>
              <p className="text-[#00C894] text-sm mt-4  invisible md:visible:text-xsm lg:visible">
                {tech}
              </p>
              <div className="absolute right-2 bottom-2">
                <a
                  href={liveProject}
                  className="cursor-pointer block"
                  target={"_blank"}
                >
                  <AiFillEye className="cursor-pointer text-4xl rounded-full p-1 text-[#5927e5] hover:bg-transparent border-4 bg-white border-white  duration-300 bg-transparent" />
                </a>
              </div>

              <div className="absolute left-2 bottom-2">
                <a
                  href={gitProject}
                  className="cursor-pointer block"
                  target={"_blank"}
                >
                  <BiCodeAlt className="cursor-pointer text-4xl rounded-full p-1 hover:bg-transparent  border-4 bg-white border-white text-[#5927e5] duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
