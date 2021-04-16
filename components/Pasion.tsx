import React from "react";
import Image from "next/image";

const Passion: React.FC<{}> = ({}) => (
  <section className="text-center bg-gray-700 p-10" id="passion">
    <h1 className="text-3xl pt-12 text-white">WHAT I'M PASSIONATE ABOUT‍🤗</h1>
    <div className="container mx-auto mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 pb-10">
      <div className="rounded-xl bg-gray-800 flex flex-col p-8">
        <div className="">
          <Image
            src="/images/undraw_static_website_0107.svg"
            width={300}
            height={200}
          />
        </div>
        <div className="flex-grow text-white">
          <h2 className="text-xl title-font font-medium mb-3">
            FrontEnd Development
          </h2>
          <p className="leading-relaxed text-sm text-justify">
            I love to make things on the web, and enjoy bringing ideas to life
            in the browser, and also suitable for the client to see.
          </p>
        </div>
      </div>
      <div className="rounded-xl bg-gray-800 flex flex-col p-8">
        <div className="">
          <Image
            src="/images/undraw_server_cluster_jwwq.svg"
            width={300}
            height={200}
          />
        </div>
        <div className="flex-grow text-white">
          <h2 className="text-xl title-font font-medium mb-3">
            Backend Development
          </h2>
          <p className="leading-relaxed text-sm text-justify">
            As much as I like to make things on the web, I also love making them
            dynamic to be suitable for the user through the Backend/Server Side.
          </p>
        </div>
      </div>
      <div className="rounded-xl bg-gray-800 flex flex-col p-8">
        <div className="">
          <Image
            src="/images/undraw_Code_typing_re_p8b9.svg"
            width={300}
            height={200}
          />
        </div>
        <div className="flex-grow text-white">
          <h2 className="text-xl title-font font-medium mb-3">Mentorship</h2>
          <p className="leading-relaxed text-sm text-justify">
            I also love to give back to the community by helping people who have
            problems in coding.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Passion;
