import { FaRegCircleCheck } from "react-icons/fa6";
import { GoAlertFill } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import Button from "../Button";

function RequiredVerification() {
  return (
    <div className="px-4 sm:px-6 py-6 sm:py-8 space-y-5 shadow-xl shadow-neutral-100 bg-white rounded-xl flex justify-between items-center gap-8 w-fit h-fit">
      <div className="">
        <div>
          <h1 className="text-md sm:text-xl xl:text-2xl font-[510] flex items-center gap-2">
            <GoAlertFill className="text-primary-500" />
            Profile Verification Required
          </h1>
          <p className="mt-1 font-light text-sm">
            Complete your profile to unlock all features and <br />
            secure your property investments.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-5">
          <p className="flex items-center gap-3 text-secondary-500">
            <FaRegCircleCheck />
            Identity Proof
          </p>
          <p className="flex items-center gap-3 text-secondary-500">
            <FaRegCircleCheck />
            Next of Kin
          </p>
          <p className="flex items-center gap-3 text-neutral-500">
            <FaRegCircle />
            Source of Funds Declaration
          </p>
        </div>
      </div>
      <div className="w-fit">
        <p className="mb-2">60% Complete</p>
        <div className="h-3 bg-neutral-200 rounded-full overflow-hidden">
          <div className="h-full bg-secondary-500 rounded-full transition-all duration-500 ease-in-out w-[60%]"></div>
        </div>
        <Button
          label="Complete Profile"
          extraClass="mt-6"
          size="md"
          Icon={FaArrowRightLong}
        />
      </div>
    </div>
  );
}

export default RequiredVerification;
