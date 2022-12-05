// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";
// import genelia_dsouza_photo from "../../images/genelia_dsouza_photo.jpg";
// import TeamCard from "./TeamCard";
// import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

// import "swiper/css";
// import "swiper/css/navigation";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// function Team() {
//   const [team, setTeam] = useState([]);
//   const [activeArrow, setActiveArrow] = useState(0);

//   // fetching the team from the database
//   useEffect(() => {
//     setTeam(newTeam);
//   }, []);

//   return (
//     <div className="bg-white py-32 px-8">
//       <div className="max-w-[1200px] m-auto">
//         <h1 className="text-5xl font-semibold text-slate-900 font-teko text-center">NOTRE ÉQUIPE D'EXPERTS</h1>
//         <div className="mt-10 relative">
//           {/* next and prev arrows */}
//           <i
//             className={`slideNextButton shadow-[0_10px_30px_0_rgb(28,9,80,19%)] cursor-pointer z-10 w-12 h-12 rounded-[50%] bg-white flex items-center justify-center absolute top-[40%] right-0 translate-x-[50%] translate-y-[-50%] transition duration-500 ${
//               activeArrow === 1 ? "bg-[#3569e1]" : "bg-white"
//             }`}
//             onMouseEnter={() => setActiveArrow(1)}
//             onMouseLeave={() => setActiveArrow(0)}
//           >
//             <FontAwesomeIcon
//               icon={faAngleRight}
//               size="xl"
//               color={activeArrow === 1 ? "white" : "#3569e1"}
//               className="transition duration-500"
//             />
//           </i>
//           <i
//             className={`slidePrevButton shadow-[0_10px_30px_0_rgb(28,9,80,19%)] cursor-pointer z-10 w-12 h-12 rounded-[50%] bg-white flex items-center justify-center absolute top-[40%] left-0 translate-x-[-50%] translate-y-[-50%] transition duration-500 ${
//               activeArrow === 2 ? "bg-[#3569e1]" : "bg-white"
//             }`}
//             onMouseEnter={() => setActiveArrow(2)}
//             onMouseLeave={() => setActiveArrow(0)}
//           >
//             <FontAwesomeIcon
//               icon={faAngleLeft}
//               size="xl"
//               color={activeArrow === 2 ? "white" : "#3569e1"}
//               className="transition duration-500"
//             />
//           </i>
//           <Swiper
//             slidesPerView={1}
//             loop={true}
//             navigation={{ nextEl: ".slideNextButton", prevEl: ".slidePrevButton" }}
//             freeMode
//             modules={[Navigation]}
//             className=""
//             spaceBetween={30}
//             breakpoints={{
//               600: {
//                 slidesPerView: 2,
//               },
//               800: {
//                 slidesPerView: 3,
//               },
//               1000: {
//                 slidesPerView: 4,
//               },
//             }}
//           >
//             {team.map((member, index) => (
//               <SwiperSlide key={index}>
//                 <TeamCard
//                   name={member.name}
//                   job={member.job}
//                   photoSrc={member.photoSrc}
//                   facebookLink={member.facebookLink}
//                   youtubeLink={member.youtubeLink}
//                   twitterLink={member.twitterLink}
//                   instagramLink={member.instagramLink}
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Team;

// const newTeam = [
//   {
//     name: "Genelia Dsouza",
//     job: "Content Writer",
//     photoSrc: genelia_dsouza_photo,
//     facebookLink: "https://www.facebook.com",
//     instagramLink: "https://www.instagram.com",
//     youtubeLink: "https://www.youtube.com",
//     twitterLink: "https://www.twitter.com",
//   },
//   {
//     name: "Genelia Dsouza",
//     job: "Content Writer",
//     photoSrc: genelia_dsouza_photo,
//     facebookLink: "https://www.facebook.com",
//     instagramLink: "https://www.instagram.com",
//     youtubeLink: "https://www.youtube.com",
//     twitterLink: "https://www.twitter.com",
//   },
//   {
//     name: "Genelia Dsouza",
//     job: "Content Writer",
//     photoSrc: genelia_dsouza_photo,
//     facebookLink: "https://www.facebook.com",
//     instagramLink: "https://www.instagram.com",
//     youtubeLink: "https://www.youtube.com",
//     twitterLink: "https://www.twitter.com",
//   },
//   {
//     name: "Genelia Dsouza",
//     job: "Content Writer",
//     photoSrc: genelia_dsouza_photo,
//     facebookLink: "https://www.facebook.com",
//     instagramLink: "https://www.instagram.com",
//     youtubeLink: "https://www.youtube.com",
//     twitterLink: "https://www.twitter.com",
//   },
//   {
//     name: "Genelia Dsouza",
//     job: "Content Writer",
//     photoSrc: genelia_dsouza_photo,
//     facebookLink: "https://www.facebook.com",
//     instagramLink: "https://www.instagram.com",
//     youtubeLink: "https://www.youtube.com",
//     twitterLink: "https://www.twitter.com",
//   },
//   {
//     name: "Genelia Dsouza",
//     job: "Content Writer",
//     photoSrc: genelia_dsouza_photo,
//     facebookLink: "https://www.facebook.com",
//     instagramLink: "https://www.instagram.com",
//     youtubeLink: "https://www.youtube.com",
//     twitterLink: "https://www.twitter.com",
//   },
//   {
//     name: "Genelia Dsouza",
//     job: "Content Writer",
//     photoSrc: genelia_dsouza_photo,
//     facebookLink: "https://www.facebook.com",
//     instagramLink: "https://www.instagram.com",
//     youtubeLink: "https://www.youtube.com",
//     twitterLink: "https://www.twitter.com",
//   },
//   {
//     name: "Genelia Dsouza",
//     job: "Content Writer",
//     photoSrc: genelia_dsouza_photo,
//     facebookLink: "https://www.facebook.com",
//     instagramLink: "https://www.instagram.com",
//     youtubeLink: "https://www.youtube.com",
//     twitterLink: "https://www.twitter.com",
//   },
//   {
//     name: "Genelia Dsouza",
//     job: "Content Writer",
//     photoSrc: genelia_dsouza_photo,
//     facebookLink: "https://www.facebook.com",
//     instagramLink: "https://www.instagram.com",
//     youtubeLink: "https://www.youtube.com",
//     twitterLink: "https://www.twitter.com",
//   },
// ];
