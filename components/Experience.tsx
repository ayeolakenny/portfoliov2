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
    <section className="text-center py-10" id="experience">
      <h1 className="text-3xl pt-7 pb-5 text-black">EXPERIENCE👨‍💻</h1>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="col-span-2">
            <p className="text-xl">SOME TECHNOLOGIES I'VE WORKED WITH:</p>
            <br />
            <div className="grid grid-cols-4 md:grid-cols-6 grid-gap-4">
              {techImage}
            </div>
          </div>
          <div className="">
            <p className="text-xl">WHERE I'VE WORKED:</p>
            {workImage}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
