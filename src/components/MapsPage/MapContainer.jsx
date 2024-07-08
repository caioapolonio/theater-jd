import React, { useState } from "react";
import mapPng from "../../assets/Mapspage/Map.png";

const MapContainer = () => {
  return (
    <div className="font-black h-screen overflow-hidden">
      <h1 className="text-[2rem] mb-4 ml-4 mt-4">Theaters</h1>
      <div className="h-[96%] w-screen relative overflow-hidden">
        <img
          src={mapPng}
          alt="mapPng"
          className=" object-cover w-full absolute bottom-32 right-5 scale-[1.20]"
        />
      </div>
    </div>
  );
};

export default MapContainer;
