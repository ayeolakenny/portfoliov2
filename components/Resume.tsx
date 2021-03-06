import React from "react";
import styles from "../styles/Resume.module.css";

const Resume: React.FC<{}> = ({}) => (
  <section>
    <div className="text-center">
      <div className={styles.overlay}>
        <div className="">
          <div className="">
            <div className="">
              <h2 className="text-5xl text-white mb-7">Check out my résumé!</h2>
              <a
                href="/Resume.pdf"
                target="_blank"
                className="mt-8 px-14 py-3.5 bg-transparent border-double border-4 border-white bg-gray-600 rounded text-white font-bold tracking-wide shadow-xl hover:bg-gray-800 hover:shadow-md text-xl"
              >
                Grab A Copy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Resume;
