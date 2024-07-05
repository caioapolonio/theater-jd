import React from "react";

const Theater = ({ theaterName, theaterAdress, theaterDistance }) => {
  return (
    <div className="h-[4.25rem] flex mx-4 mt-4 justify-between">
      <div className="flex flex-col gap-y-2">
        <p className="font-bold text-2xl/[1.75rem] text-[#eeeeee]">
          {theaterName}
        </p>
        <p className="text-xs text-[#C6C6CD]">{theaterAdress}</p>
      </div>
      <p className="text-xs text-[#C6C6CD] relative top-3">{theaterDistance}</p>
    </div>
  );
};

export default Theater;
