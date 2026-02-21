import { PiBuildings } from "react-icons/pi";
import Card from "../../components/user/Card";
import { FaArrowRightLong, FaArrowTrendUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlinePendingActions } from "react-icons/md";
import RequiredVerification from "../../components/user/RequiredVerification";
import Modal from "../../components/Modal";

function Dashboard() {
  return (
    <>
      <div className="space-y-5 sm:space-y-8">
        <div>
          <h1 className="text-2xl sm:text-3xl xl:text-4xl font-[510]">
            Welcome back, Sam
          </h1>
          <p className="mt-1 font-light">
            Here is what's happening with your properties today.
          </p>
        </div>
        {/* overview cards */}
        <div className="grid grid-cols-4 gap-6">
          <Card>
            <div className="flex justify-between items-center">
              <span className="bg-secondary-50 flex justify-center items-center p-1.5 rounded-sm">
                <PiBuildings className="text-secondary-600 text-2xl" />
              </span>
              <Link
                className="text-xs px-2 py-1 bg-primary-600 text-white rounded-md font-light
              "
              >
                Manage
              </Link>
            </div>
            <div className="">
              <p className="text-sm opacity-70">My Properties</p>
              <p className="text-2xl sm:text-3xl xl:text-4xl font-[510]">
                5 Units
              </p>
              <span className="flex items-center gap-1 text-green-600 text-sm font-light mt-1">
                <FaArrowTrendUp className="" />
                +1 this month
              </span>
            </div>
          </Card>
          <Card>
            <div className="flex justify-between items-center">
              <span className="bg-secondary-50 flex justify-center items-center p-1.5 rounded-sm">
                <TbBrandGoogleAnalytics className="text-secondary-600 text-2xl" />
              </span>
            </div>
            <div className="">
              <p className="text-sm opacity-70">Total Investment</p>
              <p className="text-2xl sm:text-3xl xl:text-4xl font-[510]">
                ₦12M
              </p>
              <span className="flex items-center gap-1 text-green-600 text-sm font-light mt-1">
                <FaArrowTrendUp className="" />
                +1 this month
              </span>
            </div>
          </Card>
          <Card>
            <div className="flex justify-between items-center">
              <span className="bg-secondary-50 flex justify-center items-center p-1.5 rounded-sm">
                <IoWalletOutline className="text-secondary-600 text-2xl" />
              </span>
              <Link
                className="text-xs px-2 py-1 bg-secondary-600 text-white rounded-md font-light
              "
              >
                Top Up
              </Link>
            </div>
            <div className="">
              <p className="text-sm opacity-70">Wallet Balance</p>
              <p className="text-2xl sm:text-3xl xl:text-4xl font-[510]">
                ₦125,000
              </p>
              {/* <span className="flex items-center gap-1 text-green-600 text-sm font-light mt-1">
                <FaArrowTrendUp className="" />
                +1 this month
              </span> */}
            </div>
          </Card>
          <Card>
            <div className="flex justify-between items-center">
              <span className="bg-red-50 flex justify-center items-center p-1.5 rounded-sm">
                <MdOutlinePendingActions className="text-red-600/60 text-2xl" />
              </span>
              <Link className="text-xs px-2 py-1 bg-primary-500 text-black rounded-md font-light">
                Top Up
              </Link>
            </div>
            <div className="">
              <p className="text-sm opacity-70">Pending Balance</p>
              <p className="text-2xl sm:text-3xl xl:text-4xl font-[510] text-red-600/80">
                ₦120,500
              </p>
              <span className="flex items-center gap-1 text-xs mt-1 opacity-70">
                Next due in 3 days
              </span>
            </div>
          </Card>
        </div>

        {/* Profile verification requirement */}
        <section className="space-y-5 sm:space-y-8">
          <RequiredVerification />
          <div className="px-4 sm:px-6 py-6 sm:py-8 space-y-5 shadow-xl shadow-neutral-100 bg-white rounded-xl flex justify-between items-center gap-8">
            <div className="flex items-center justify-between">
              <p className=""> My Properties</p>
              <Link className="text-sm font-medium text-accent flex items-center gap-1">
                View All Properties
                <FaArrowRightLong />
              </Link>
            </div>
            <div className="">
              <table>
                <tr>
                  <th></th>
                </tr>
              </table>
            </div>
          </div>
        </section>

        {/* recommended properties */}
        <div>
          <h1 className="text-2xl sm:text-3xl xl:text-4xl font-[510]">
            Recommended For You
          </h1>
          <p className="mt-1 font-light">
            Here is what's happening with your properties today.
          </p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
