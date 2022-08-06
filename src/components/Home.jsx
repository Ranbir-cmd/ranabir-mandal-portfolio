import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className=" dark:bg-slate-900 dark:text-white h-screen w-full flex-col flex items-center font-cleanfont"
    >
      <div className="w-2/3 mx-auto h-full flex flex-col justify-center items-center sm:flex-row">
        <div className="sm:flex gap-8 ">
          {/* <div className=" w-90 sm:h-60 sm:w-60">
            <img
              src={profile}
              alt=""
              className="w-full object-cover h-full shadow-md shadow-pink-700 rounded-lg"
            />
          </div> */}
          <div className="mt-2">
            <p className="text-[#000] dark:text-white text-xl sm:text-2xl mb-1">
              hi, i'm
            </p>
            <h1 className="sm:text-6xl text-3xl mb-2 font-bold">
              Ranabir Mandal
            </h1>
            <p className="text-xl sm:text-2xl mb-4 font-semi-bold">
              I'm a Web Developer
            </p>
            <Link to="work" smooth={true} duration={500}>
              <button className="py-2 px-3 border-2 border-[#5927e5] bg-[#5927e5] rounded-lg text-white font-bold uppercase hover:bg-transparent hover:text-[#5927e5] duration-300">
                My Works
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
