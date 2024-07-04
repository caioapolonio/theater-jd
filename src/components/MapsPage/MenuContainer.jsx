import React from "react";

const MenuContainer = () => {
  return (
    <div className="w-screen z-10 bg-[#141414E5] absolute bottom-8 flex flex-col justify-start no-scrollbar">
      <div className="w-full h-[4.25rem]">Metreon Theater</div>
      <div className="w-full h-[4.25rem]">Kabuki Theater</div>
      <div className="w-full h-[4.25rem]">Roxie Theater</div>
    </div>
  );
};

export default MenuContainer;
