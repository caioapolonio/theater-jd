import React from "react";
import mapPng from "../../assets/Mapspage/Map.png";
{
  /* <iframe
  className="w-full h-[85vh] no-scrollbar"
  src={casa}
  scrolling="no"
  title="map"
></iframe> */
}

const MapContainer = () => {
  // const casa =
  //   "https://www.google.com/maps/place/Rua+Nossa+Senhora+das+Gra%C3%A7as,+950+-+Pirambu,+Fortaleza+-+CE,+60310-770/@-3.7092969,-38.5590435,17z/data=!3m1!4b1!4m6!3m5!1s0x7c749ef99ba51c3:0x9f1cdf81c1d17ff7!8m2!3d-3.7092969!4d-38.5564686!16s%2Fg%2F11dz56l8k7?entry=ttu";
  return (
    <div className="font-black pt-7 ">
      <h1 className="text-[2rem] mb-4 ml-4">Theaters</h1>
      <img src={mapPng} alt="mapPng" className="w-full object-cover h-[90vh]" />
    </div>
  );
};

export default MapContainer;
