import MapContainer from "../components/MapsPage/MapContainer";
import MenuContainer from "../components/MapsPage/MenuContainer";
import Navbar from "../components/Navbar";

const Theaters = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#151515] text-white box-border ">
      <MapContainer />
      <MenuContainer />
      <Navbar />
    </div>
  );
};

export default Theaters;
