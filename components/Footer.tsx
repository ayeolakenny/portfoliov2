import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className="footer bg-gray-900 relative pt-1">
      <div className="container mx-auto px-6">
        <div className="sm:flex sm:mt-8">
          <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-row justify-center">
            <a href="https://twitter.com/ayeolakenny" target="_blank">
              <div className="flex flex-col mr-3">
                <span className="font-bold text-white uppercase mt-4 md:mt-0 mb-2 hover:text-blue-400 cursor-pointer">
                  <TwitterIcon style={{ width: 50, height: 50 }} />
                </span>
              </div>
            </a>
            <a
              href="https://www.facebook.com/ayeolakehinde.olatunde.7/"
              target="_blank"
            >
              <div className="flex flex-col mr-3">
                <span className="font-bold text-white uppercase mt-4 md:mt-0 mb-2 hover:text-blue-500 cursor-pointer">
                  <FacebookIcon style={{ width: 50, height: 50 }} />
                </span>
              </div>
            </a>
            <a href="https://www.instagram.com/ayeolakenny/" target="_blank">
              <div className="flex flex-col mr-3">
                <span className="font-bold text-white uppercase mt-4 md:mt-0 mb-2 hover:text-pink-400 cursor-pointer">
                  <InstagramIcon style={{ width: 50, height: 50 }} />
                </span>
              </div>
            </a>
            <a href="https://github.com/ayeolakenny" target="_blank">
              <div className="flex flex-col mr-3">
                <span className="font-bold text-white uppercase mt-4 md:mt-0 mb-2 hover:text-gray-400 cursor-pointer">
                  <GitHubIcon style={{ width: 50, height: 50 }} />
                </span>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/ayeolakenny/" target="_blank">
              <div className="flex flex-col">
                <span className="font-bold text-white uppercase mt-4 md:mt-0 mb-2 hover:text-blue-600 cursor-pointer">
                  <LinkedInIcon style={{ width: 50, height: 50 }} />
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-lg text-white font-bold mb-2">
              @ ayeolakenny {new Date().getFullYear()}
            </p>
          </div>
          <a href="#home" className="text-white">
            <ArrowUpwardIcon style={{ width: 50, height: 50 }} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
