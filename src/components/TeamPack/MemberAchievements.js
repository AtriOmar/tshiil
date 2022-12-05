import React, { useContext, useEffect, useRef, useState } from "react";
import { UIContext } from "../../contexts/UIProvider";
import AchievementCard from "./AchievementCard";

function MemberAchievements({ memberInfo }) {
  const [elementIntoView, setElementIntoView] = useState(false);
  const { windowScroll } = useContext(UIContext);

  useEffect(() => {
    if (
      !elementIntoView &&
      document.querySelector("#memberAchievementsContainer").getBoundingClientRect().top < window.innerHeight - 50
    ) {
      setElementIntoView(true);
    }
  }, [windowScroll]);

  return (
    <div
      className="w-full max-w-[1200px] m-auto grid scr900:grid-cols-4 scr600:grid-cols-2 grid-cols-1 gap-2 px-4 py-20"
      id="memberAchievementsContainer"
    >
      <AchievementCard
        title="Projects Done"
        number={memberInfo.projects}
        description="Ut id ante commodo efficitur. Cras et congue mi, ut iaculis leo.Aenean sit amet finibus orci."
        elementIntoView={elementIntoView}
        showingDelay={0}
      />
      <AchievementCard
        title="Total clients"
        number={memberInfo.clients}
        description="Ut id ante commodo efficitur. Cras et congue mi, ut iaculis leo.Aenean sit amet finibus orci."
        elementIntoView={elementIntoView}
        showingDelay={200}
      />
      <AchievementCard
        title="Gain Reviews"
        number={memberInfo.reviews}
        description="Ut id ante commodo efficitur. Cras et congue mi, ut iaculis leo.Aenean sit amet finibus orci."
        elementIntoView={elementIntoView}
        showingDelay={400}
      />
      <AchievementCard
        title="Awards Win"
        number={memberInfo.awards}
        description="Ut id ante commodo efficitur. Cras et congue mi, ut iaculis leo.Aenean sit amet finibus orci."
        elementIntoView={elementIntoView}
        showingDelay={600}
      />
    </div>
  );
}

export default MemberAchievements;
