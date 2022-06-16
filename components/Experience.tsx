import React from "react";
import { TechnologyImage } from "./technologyImage";
import { WorkImage } from "./workImage";
import { workedWithTechs } from "../data/technologies";
import { workedWithCompanies } from "../data/companies";

const Experience: React.FC<{}> = ({}) => {
  const techImage = workedWithTechs.map((icon) => (
    <div className="pr-2">
      <TechnologyImage
        href={icon.href}
        src={icon.src}
        height={icon.height ? icon.height : 120}
        width={icon.width ? icon.width : 120}
      />
    </div>
  ));

  const workImage = workedWithCompanies.map((icon) => (
    <WorkImage
      href={icon.href}
      src={icon.src}
      height={icon.height}
      width={icon.width}
    />
  ));

  return (
    <section className="py-10 text-center" id="experience">
      <h1 className="pb-5 text-3xl text-black pt-7">EXPERIENCE👨‍💻</h1>
      <div className="">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
          <div className="col-span-2">
            <p className="text-xl">SOME TECHNOLOGIES I'VE WORKED WITH:</p>
            <br />
            <div className="grid grid-cols-4 md:grid-cols-6 grid-gap-4">
              {techImage}
            </div>
          </div>
          <div>
            <p className="text-xl">WHERE I'VE WORKED:</p>
            <div className="grid grid-cols-2 gap-2">{workImage}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
