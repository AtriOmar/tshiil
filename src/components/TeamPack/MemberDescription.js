import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function MemberDescription({ memberInfo }) {
  return (
    <div className="w-full flex scr900:flex-row flex-col max-w-[1200px] m-auto my-20 ">
      <div className="scr900:w-2/5 w-full px-4">
        <img src={memberInfo.photoScr} alt="" className="w-full rounded-lg scr900:max-w-none max-w-[500px] m-auto" />
      </div>
      <div className="scr900:w-3/5 w-full px-8 py-4">
        <p className="text-blue-400 font-dm_sans capitalize text-base font-normal scr900:text-left text-center ">
          {memberInfo.job}
        </p>
        <p className="text-3xl font-medium font-teko text-slate-900 mt-2 scr900:text-left text-center">
          {memberInfo.name}
        </p>
        <p className="text-base font-normal text-slate-600 scr900:text-left text-center mt-4 leading-relaxed">
          {memberInfo.description}
        </p>
        <p className="text-slate-600 font-dm_sans font-semibold mt-6 scr900:text-left text-center">
          <span className="text-black">Email: </span>
          <a href={`mailto:${memberInfo.email}`}>{memberInfo.email}</a>
        </p>
        <p className="text-slate-600 font-dm_sans font-semibold mt-2 scr900:text-left text-center">
          <span className="text-black">Phone: </span>
          <a href={`tel:${memberInfo.phone}`}>{memberInfo.phone}</a>
        </p>
        <div className={`scr900:w-fit w-full flex gap-2 justify-center mt-4`}>
          {memberInfo.facebookLink && (
            <a
              href={memberInfo.facebookLink}
              target="blank"
              className="w-12 h-12 bg-white flex items-center justify-center border border-black"
            >
              <FontAwesomeIcon icon={faFacebookF} size="xl" color="black" />
            </a>
          )}
          {memberInfo.instagramLink && (
            <a
              href={memberInfo.instagramLink}
              target="blank"
              className="w-12 h-12 bg-white flex items-center justify-center border border-black"
            >
              <FontAwesomeIcon icon={faInstagram} size="xl" color="black" />
            </a>
          )}
          {memberInfo.twitterLink && (
            <a
              href={memberInfo.twitterLink}
              target="blank"
              className="w-12 h-12 bg-white flex items-center justify-center border border-black"
            >
              <FontAwesomeIcon icon={faTwitter} size="xl" color="black" />
            </a>
          )}
          {memberInfo.linkedinLink && (
            <a
              href={memberInfo.linkedinLink}
              target="blank"
              className="w-12 h-12 bg-white flex items-center justify-center border border-black"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="xl" color="black" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default MemberDescription;
