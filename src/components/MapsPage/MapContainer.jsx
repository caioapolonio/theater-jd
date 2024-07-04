import React from "react";

const MapContainer = () => {
  const casa =
    "https://www.google.com/maps/place/Rua+Nossa+Senhora+das+Gra%C3%A7as,+950+-+Pirambu,+Fortaleza+-+CE,+60310-770/@-3.7092969,-38.5590435,17z/data=!3m1!4b1!4m6!3m5!1s0x7c749ef99ba51c3:0x9f1cdf81c1d17ff7!8m2!3d-3.7092969!4d-38.5564686!16s%2Fg%2F11dz56l8k7?entry=ttu";
  return (
    <div className="font-black">
      <h1>Theaters</h1>
      <iframe className="w-full" src={casa} title="map"></iframe>
    </div>
  );
};

export default MapContainer;
