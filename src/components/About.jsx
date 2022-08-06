import React from "react";
import aboutme from "../assets/home_anime.gif";

const About = () => {
  return (
    <div
      name="about"
      className="bg-[#EDF2F8] dark:bg-slate-900 dark:text-white h-screen w-full flex-col flex items-center font-myfont"
    >
      <div className="w-2/3 mx-auto h-full flex flex-col justify-center">
        <div className="md:text-center font-bold">
          <h1 className="sm:text-6xl text-3xl">About Me</h1>
        </div>
        <div className="grid md:grid-cols-2 md:gap-8 mt-4 md:mt-8">
          <div className=" font-bold md:text-right">
            <img src={aboutme} />
          </div>
          <div className="text-base md:text-xl mt-4 md:mt-0">
            <p className=" mt-6 md:text-left">
              <h1 className="text-4xl text-[#ae52df] font-bold">
                Hello, i'm Ranabir
              </h1>
              <p className="mt-2 text-base font-bold text-[#444] dark:text-[#aaa]">
                a Web Developer based in Kolkat, India. I have done graduation
                in Information Technology in 2021. <br />I have been building
                websites
                <p className="mt-2 text-base font-bold text-[#444] dark:text-[#aaa]">
                  and <span className="text-[#5e69e6]">i love React.JS </span>{" "}
                  because it is so simple. Wait! i didn't say "easy" because
                  it's not easy for everyone, but it is simple and that's what{" "}
                  <span className="text-[#5e69e6]">hooked</span> me.
                </p>
              </p>
              {/* I am passionate about building excellent mobile applications that
              improves the lives of those around me. I specialize in creating
              application for clients ranging from individuals and
              small-businesses all the way to large enterprise corporations.
              What would you do if you had a app developer available at your
              fingertips? */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
