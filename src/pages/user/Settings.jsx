import { PiBuildings, PiBuildingsFill } from "react-icons/pi";
import Card from "../../components/user/Card";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlinePendingActions } from "react-icons/md";

function Settings() {
  return (
    <>
      <div className="space-y-8 sm:space-y-10">
        <div>
          <h1 className="text-2xl sm:text-3xl xl:text-4xl font-[510]">
            Settings
          </h1>
          <p className="mt-1 font-light">
            Here is what's happening with your properties today.
          </p>
        </div>
      </div>
    </>
  );
}

export default Settings;
