import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function TeamCard({ name, job, photoSrc, facebookLink, instagramLink, twitterLink, youtubeLink }) {
  const [active, setActive] = useState(false);

  return (
    <div className="w-full h-full" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <div className="h-4/5 w-full relative overflow-hidden rounded-lg">
        {/* hover background and social media links */}
        <div
          className={`absolute top-0 left-0 w-full h-full transition duration-500 bg-gradient-to-t from-[#1c51ca] ${
            active ? "" : "translate-y-full"
          }`}
        ></div>
        <div
          className={`absolute top-full left-0 w-full flex gap-2 justify-center transition duration-500 linear ${
            active ? "translate-y-[-150%] delay-200" : "delay-[0ms]"
          }`}
        >
          {facebookLink && (
            <a
              href={facebookLink}
              target="blank"
              className="w-11 h-11 rounded-[50%] bg-white flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faFacebookF} size="xl" color="#3569e1" />
            </a>
          )}
          {instagramLink && (
            <a
              href={instagramLink}
              target="blank"
              className="w-11 h-11 rounded-[50%] bg-white flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faInstagram} size="xl" color="#3569e1" />
            </a>
          )}
          {twitterLink && (
            <a
              href={twitterLink}
              target="blank"
              className="w-11 h-11 rounded-[50%] bg-white flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faTwitter} size="xl" color="#3569e1" />
            </a>
          )}
          {youtubeLink && (
            <a
              href={youtubeLink}
              target="blank"
              className="w-11 h-11 rounded-[50%] bg-white flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faYoutube} size="xl" color="#3569e1" />
            </a>
          )}
        </div>
        <img src={photoSrc} alt="" className="h-full w-full object-cover" />
      </div>
      <h1
        className={`transition duration-500 text-4xl mt-3 font-medium font-teko text-slate-900 hover:text-blue-600 capitalize`}
      >
        {name}
      </h1>
      <p className={`transition duration-500 text-base font-normal text-slate-600 uppercase`}>{job}</p>
    </div>
  );
}

export default TeamCard;
