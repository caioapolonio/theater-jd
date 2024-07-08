import React from "react";
import Theater from "./TheaterAdress/TheaterAdress";
import Draggable from "react-draggable";
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
    <Draggable
      bounds={{ top: 0, left: 0, right: 0, bottom: 164 }}
      positionOffset={{ x: "0%", y: "0%" }}
    >
      <div className="h-[19.3125rem] absolute bottom-8 flex flex-col">
        <div className="bg-[#1E1E1E] w-[2.3125rem] h-[0.375rem] rounded-[0.5rem] m-auto"></div>
        <div className="w-screen h-[18.375rem] z-10 bg-[#141414E5] bg-opacity-90  flex flex-col justify-start no-scrollbar rounded-lg">
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
      </div>
    </Draggable>
  );
};

export default MenuContainer;
