import React from "react";
import Theater from "./TheaterAdress/TheaterAdress";
const MenuContainer = () => {
  const theater1Adress = {
    title: "Metreon Theater",
    adress: "135 4th St Suite 3000, San Francisco, CA 94103",
    distance: "0.8 miles",
  };

  const theater2Adress = {
    title: "Kabuki Theater",
    adress: "1881 Post St, San Francisco, CA 94115",
    distance: "2.2 miles",
  };

  const theater3Adress = {
    title: "Roxie Theater",
    adress: "3117 16th St, San Francisco, CA 94103",
    distance: "3.1 miles",
  };

  return (
    <div className="w-screen h-[18.375rem] z-10 bg-[#141414E5] bg-opacity-90 absolute bottom-8 flex flex-col justify-start no-scrollbar rounded-lg">
      <Theater
        theaterName={theater1Adress.title}
        theaterAdress={theater1Adress.adress}
        theaterDistance={theater1Adress.distance}
      />
      <Theater
        theaterName={theater2Adress.title}
        theaterAdress={theater2Adress.adress}
        theaterDistance={theater2Adress.distance}
      />
      <Theater
        theaterName={theater3Adress.title}
        theaterAdress={theater3Adress.adress}
        theaterDistance={theater3Adress.distance}
      />
    </div>
  );
};

export default MenuContainer;
