import Navbar from "./components/Navbar";
import Discover from "./pages/Discover";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#151515] text-white">
      <Discover />
      <Navbar />
    </div>
  );
};

export default App;
