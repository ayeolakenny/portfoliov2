import React from "react";
import Link from "next/link";

interface ProjectsProps {
  projects: any;
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const body = projects.map((project) => (
    <div key={project.id}>
      <div className="rounded-lg overflow-hidden">
        {/* USE FOR LOCALHOST */}
        {/* <div className="relative overflow-hidden pb-60"> */}
        {/* USE FOR PROD */}
        <div className="relative overflow-hidden">
          <img
            className={project.projectImage.className}
            src={project.projectImage.src}
            alt={project.projectImage.alt}
          />
        </div>
        <div className="relative bg-gray-300">
          <div className="py-10 px-8">
            <h3 className="text-2xl font-bold">{project.name}</h3>
            <div className="text-gray-600 text-sm font-medium flex mb-4 mt-2">
              <p>
                {project.github ? (
                  <Link href={project.github}>View Source Code</Link>
                ) : null}
              </p>
            </div>
            <p className="leading-7">{project.description}</p>
            <div className="mt-10 flex justify-between items-center">
              {project.stackImages.map((image: any) => (
                <img
                  src={image.src}
                  alt={image.alt}
                  className={image.className}
                />
              ))}
            </div>
            {project.demoLink ? (
              <a
                target="_blank"
                href={project.demoLink}
                className="flex items-center"
              >
                <p className="mr-4">View Demo</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14.125"
                  height="13.358"
                  viewBox="0 0 14.125 13.358"
                >
                  <g transform="translate(-3 -3.293)">
                    <path
                      id="Path_7"
                      data-name="Path 7"
                      d="M14.189,10.739H3V9.2H14.189L9.361,4.378l1.085-1.085,6.679,6.679-6.679,6.679L9.361,15.566Z"
                      fill="#1d1d1d"
                      fill-rule="evenodd"
                    ></path>
                  </g>
                </svg>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  ));

  return body;
};
