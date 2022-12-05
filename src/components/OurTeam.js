// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import SecondNav from "./SecondNav";
// import genelia_dsouza_photo from "../images/genelia_dsouza_photo.jpg";
// import MemberDescription from "./TeamPack/MemberDescription";
// import MemberAchievements from "./TeamPack/MemberAchievements";

// function OurTeam() {
//   const { id: memberId } = useParams();
//   const [memberInfo, setMemberInfo] = useState();

//   // fetching the user from the database
//   useEffect(() => {
//     setMemberInfo(members[memberId]);
//   }, [memberId]);

//   return (
//     <>
//       {memberInfo && (
//         <div>
//           <SecondNav />
//           <div className="w-full py-32 flex items-center justify-center bg-gradient-to-r from-[#1C51CB] to-[#4E81F7] uppercase text-white text-6xl font-teko">
//             {memberInfo.name}
//           </div>
//           <MemberDescription memberInfo={memberInfo} />
//           <MemberAchievements memberInfo={memberInfo} />
//         </div>
//       )}
//     </>
//   );
// }

// export default OurTeam;

// const members = [
//   {
//     id: "1234",
//     name: "Carry Petersen",
//     job: "user reasercher",
//     photoScr: genelia_dsouza_photo,
//     description:
//       "Donec venenatis quam id neque commodo imperdiet. Pellentesque non imperdiet elit. Nulla id turpis nisi. Vivamus placerat interdum fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Urna malesuada sagittis nec at consectetur adipiscing elit. Fusce laoreet, ligula Lorem ipsum dolor sit amet, Lorem in ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet, ligula Lorem ipsum dolor sit amet.",
//     email: "reeko@gmail.com",
//     experience: 12,
//     phone: "+216 20 20 21 21",
//     facebookLink: "https://www.facebook.com",
//     instagramLink: "https://www.instagram.com",
//     twitterLink: "https://www.twitter.com",
//     linkedinLink: "https://www.linkedin.com",
//     projects: 1000,
//     clients: 369,
//     reviews: 120,
//     awards: 123,
//     customerSupportTeam: 15,
//     awardsWinningTeam: 136,
//   },
//   {
//     id: "1111",
//     name: "Carry Petersen",
//     job: "user reasercher",
//     photoScr: genelia_dsouza_photo,
//     description:
//       "Donec venenatis quam id neque commodo imperdiet. Pellentesque non imperdiet elit. Nulla id turpis nisi. Vivamus placerat interdum fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Urna malesuada sagittis nec at consectetur adipiscing elit. Fusce laoreet, ligula Lorem ipsum dolor sit amet, Lorem in ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet, ligula Lorem ipsum dolor sit amet.",
//     email: "reeko@gmail.com",
//     experience: 12,
//     phone: "",
//     facebookLink: "https://www.facebook.com",
//     instagramLink: "https://www.instagram.com",
//     twitterLink: "https://www.twitter.com",
//     linkedinLink: "https://www.linkedin.com",
//     projects: 1000,
//     clients: 369,
//     reviews: 120,
//     awards: 123,
//     customerSupportTeam: 15,
//     awardsWinningTeam: 136,
//   },
// ];
