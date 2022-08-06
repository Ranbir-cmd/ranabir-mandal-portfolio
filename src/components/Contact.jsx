import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-[#F0ECE3] dark:bg-slate-900 dark:text-white min-h-screen max-h-full w-full flex-col flex items-center font-myfont  justify-center"
    >
      <div className="w-2/3 mx-auto h-full flex flex-col justify-center">
        <div className="md:text-center font-bold">
          <h1 className="sm:text-6xl text-3xl border-b-4 border-[#B05272] inline">
            Contact Me
          </h1>
        </div>
        <div className="mt-8 w-full md:w-3/4 md:mx-auto ">
          <form
            action="https://getform.io/f/d97ac4d4-e599-40ed-977b-b1fbb91a231e"
            method="POST"
          >
            <input
              type="text"
              placeholder="Enter Your Full Name"
              name="name"
              className="w-full p-2 text-base mb-4 focus:outline-[#B05272] rounded-md"
              required
            />
            <input
              type="email"
              placeholder="Enter Your Email Address"
              name="email"
              className="w-full p-2 text-base mb-4 focus:outline-[#B05272] rounded-md"
              required
            />
            <input
              type="text"
              placeholder="Enter Your Subject"
              name="subject"
              className="w-full p-2 text-base mb-4 focus:outline-[#B05272] rounded-md"
              required
            />
            <textarea
              name="message"
              className="w-full p-2 text-base mb-4 h-40 resize-none focus:outline-[#B05272] rounded-md"
              required
              placeholder="Enter Your Message"
            ></textarea>
            <button
              type="submit"
              className="w-full p-2 bg-[#B05272] text-white text-lg font-bold border-2 border-[#B05272] hover:bg-white hover:text-[#B05272] outline-none cursor-pointer duration-300 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
