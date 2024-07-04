import { useLocation } from "react-router-dom";
import discoverIcon from "../assets/discoverIcon.svg";
import accountIcon from "../assets/accountIcon.svg";
import theatersIcon from "../assets/theatersIcon.svg";
import icon from "../assets/icon.svg";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#242424] border-t-2 border-[#666666] font-medium text-xs h-14 z-40">
      <ul className="flex justify-around items-center h-full">
        <li>
          <a
            href="/"
            className={`${
              location.pathname === "/" ? "text-white" : "text-[#EEEEEE]"
            } flex flex-col items-center gap-1`}
          >
            <img src={discoverIcon} alt="" className="h-4" />
            Discover
          </a>
        </li>
        <li>
          <a
            href="/tickets"
            className={`${
              location.pathname === "/tickets" ? "text-white" : "text-[#EEEEEE]"
            } flex flex-col items-center gap-1`}
          >
            <img src={icon} alt="" className="h-4" />
            Tickets
          </a>
        </li>
        <li>
          <a
            href="/theaters"
            className={`${
              location.pathname === "/theaters"
                ? "text-white"
                : "text-[#EEEEEE]"
            } flex flex-col items-center gap-1`}
          >
            <img src={theatersIcon} alt="" className="h-4" />
            Theaters
          </a>
        </li>
        <li>
          <a
            href="/account"
            className={`${
              location.pathname === "/account" ? "text-white" : "text-[#EEEEEE]"
            } flex flex-col items-center gap-1`}
          >
            <img src={accountIcon} alt="" className="h-4" />
            Account
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
