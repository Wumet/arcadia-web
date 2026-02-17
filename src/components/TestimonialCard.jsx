import { FaStar } from "react-icons/fa6";

function TestimonialCard({ t }) {
  return (
    <div className="h-fit border border-neutral-300 p-4 xl:p-6 rounded-xl drop-shadow-2xl drop-shadow-gray-700/5 grow space-y-4 2xl:space-y-6 overflow-hidden">
      <div className="flex gap-1 items-center text-secondary-500 text-xl">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <p className="font-light text-[18px]">{t.testimony}</p>
      <div className="">
        <p>{t.user}</p>
        <p className="opacity-60 ">{t.occupation}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
