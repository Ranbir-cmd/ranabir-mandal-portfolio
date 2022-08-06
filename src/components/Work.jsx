import React from "react";
import Works from "./Works";
import flipkart from "../assets/ScreenshotFlipkart.png";
import gkeep from "../assets/ScreenshotGKeep.png";
import postman from "../assets/ScreenshotPostman.png";
import realtimeText from "../assets/ScreenshotRealtime.png";

const Work = () => {
  const projects = [
    {
      id: 1,
      projectName: "Flipkart-clone",
      backgroundImage: `url(${flipkart})`,

      descriptionHead: "Flipkart Web App",
      descriptionBody:
        "it is clone of famous Indian E-Commerce website. User can Sign In and add items in basket and can also request for orders.",
      tech: "React | Node | Express | MongoDB | Material UI",
      liveProject: "https://ranbirsfllipkart.herokuapp.com/",
      gitProject: "https://github.com/Ranbir-cmd/flipkarttt-clone-deploy",
    },
    {
      id: 2,
      projectName: "Realtime-text-editor",
      backgroundImage: `url(${realtimeText})`,
      descriptionHead: "Realtime-text-editor",
      descriptionBody:
        "Write, edit and interact with others on the same content, in real time. It allows you to edit documents collaboratively in real-time, much like a live multi-player editor that runs in your browser.",
      tech: "React | Node | Express | Socket.io ",
      liveProject: "https://realtm-code-editor.herokuapp.com/",
      gitProject: "https://github.com/Ranbir-cmd/real-time-text-editor",
    },
    {
      id: 3,
      projectName: "Postman-clone",
      backgroundImage: `url(${postman})`,

      descriptionHead: "Postman-clone",
      descriptionBody:
        "Postman is an API platform for building and using APIs. In our app user can make two types of HTTP requests: GET, POST and can read their responses",
      tech: "React | Material UI ",
      liveProject: "https://astonishing-horse-f73dbb.netlify.app/",
      gitProject: "https://github.com/Ranbir-cmd/postman-clone",
    },
    {
      id: 4,
      projectName: "Note-Keeper",
      backgroundImage: `url(${gkeep})`,
      descriptionHead: "Note-Keeper",
      descriptionBody:
        "A minimal Clone of Google Keep written in ReactJS with Material UI Components, themed to look like Google Keep. User can create note, archive that note, delete and can restore that note.",
      tech: "React | Material UI ",
      liveProject: "https://ranbir-cmd.github.io/keep-note/",
      gitProject: "https://github.com/Ranbir-cmd/keep-note",
    },
    // {
    //   id: 5,
    //   projectName: "todo-list",
    //   backgroundImage:
    //     'url("https://play-lh.googleusercontent.com/dzGwWT0MKTyZnncxT2A05yrGryY9IQZTOh2QxEG00l6uvIp4yqqh0nYiFyAoloNyi0pw=w720-h310-rw")',
    //   descriptionHead: "Flipkart",
    //   descriptionBody: "a fullstack  flipkart app",
    //   liveProject: "",
    //   gitProject: "",
    // },
    // {
    //   id: 6,
    //   projectName: "flipkart-clone",
    //   backgroundImage:
    //     'url("https://play-lh.googleusercontent.com/dzGwWT0MKTyZnncxT2A05yrGryY9IQZTOh2QxEG00l6uvIp4yqqh0nYiFyAoloNyi0pw=w720-h310-rw")',
    //   descriptionHead: "Flipkart",
    //   descriptionBody: "a fullstack  flipkart app",
    //   liveProject: "",
    //   gitProject: "",
    // },
  ];

  return (
    <div
      name="work"
      className="bg-[#EDF2F8] dark:bg-slate-900 dark:text-white min-h-screen py-10 max-h-full w-full flex-col flex items-center font-myfont justify-center"
    >
      <div className="w-2/3 mx-auto h-full flex flex-col justify-center">
        <div className="md:text-center font-bold">
          <h1 className="sm:text-6xl text-2xl">My Works</h1>
        </div>
        <div className="mt-5 md:mt-8 grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Works
              key={project.id}
              projectName={project.projectName}
              tech={project.tech}
              backgroundImage={project.backgroundImage}
              descriptionHead={project.descriptionHead}
              descriptionBody={project.descriptionBody}
              liveProject={project.liveProject}
              gitProject={project.gitProject}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
