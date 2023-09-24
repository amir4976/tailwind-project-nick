import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
function Footer() {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-warp max-lg:flex-col">
        <div className="flex flex-col justify-start items-start">
          <a href="/">
            <img src={footerLogo} alt="" width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            get shoes ready for the new term at your nearest nike store find
            your perfect size in store get rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((media) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full" key={media}>
                <img src={media.src} alt={media.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-12 flex-wrap">
          {footerLinks.map((section)=>(
            <div className="" key={section}>
                <h4 className="text-white font-bold text-2xl">{section.title}</h4>
                  <ul>
                    {section.links.map((link)=>(
                      <li key={link} className="text-white mt-1">
                        <a href={link.link}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
           </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
