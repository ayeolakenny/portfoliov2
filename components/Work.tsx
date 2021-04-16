import React from "react";
import { Projects } from "./projects";
import { projects } from "../data/projects";

const Work: React.FC<{}> = ({}) => (
  <section className="text-center py-10" id="work">
    <div className="">
      <div className="">
        <h2 className="text-3xl text-center mt-5">What I've Worked On</h2>
      </div>
      <div className="container mx-auto mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        <Projects projects={projects} />
      </div>
    </div>
    <p className="mt-3">
      Want to see more of my projects on Node, Php etc check out my github{" "}
      <a
        className="text-indigo-500 underline"
        href="https://github.com/ayeolakenny"
      >
        Click here
      </a>{" "}
    </p>
  </section>
);

export default Work;
