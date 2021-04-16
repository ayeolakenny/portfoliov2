import React from "react";
import Image from "next/image";

interface ContactProps {}

const Contact: React.FC<ContactProps> = ({}) => {
  return (
    <div className="bg-white flex py-16 flex-col" id="contact">
      <Image src="/images/send.svg" width={70} height={70} />
      <div className="text-center pt-7">
        <p className="text-2xl">GET IN TOUCH!</p>
        <p className="pt-7 text-xl">
          Have questions or just want to chat with me, feel free to shoot me an
          email 🚀
        </p>
      </div>
      <div className="text-center pt-7">
        <a
          href="mailto:ayeolakenny@gmail.com"
          className="bg-transparent hover:bg-gray-700 text-dark font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded mr-2"
        >
          Say Hello
        </a>
      </div>
    </div>
  );
};

export default Contact;
