import { Link } from "react-router-dom";
import Button from "./Button";
import { FaLocationDot, FaArrowRight } from "react-icons/fa6";

function PropertyCard({ property, tagVariant = "default" }) {
  const tagVariants = {
    default: "bg-primary-900 text-primary-100",
    hot: "bg-accent text-dark",
    new: "bg-secondary-600 text-neutral-900",
  };
  return (
    <div className="pb-4 bg-white drop-shadow-xl drop-shadow-neutral-100 grow overflow-hidden rounded-xl">
      <div className="relative">
        <img
          src={property.imageUrl}
          alt={property.propertyName}
          className="bg-cover h-full w-full bg-center"
        />
        <p
          className={`text-xs w-fit h-fit rounded-sm px-2 py-1 ${tagVariants[tagVariant]} absolute inset-4`}
        >
          {property.tag}
        </p>
      </div>
      <div className="px-4 xl:px-6 divide-y divide-neutral-100 pt-4">
        <div className="flex justify-between pb-4">
          <div className="space-y-1">
            <h4 className="text-xl xl:text-2xl font-medium text-nowrap">
              {property.propertyName}
            </h4>
            <p className="flex items-center gap-1 text-[10px] md:text-sm xl:text-[16px] text-neutral-600 font-normal text-nowrap">
              <FaLocationDot className="text-primary-500" />
              <span> {property.location}</span>
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 xl:gap-4 pt-4">
          <div className="">
            <p className="text-[9px] font-light uppercase">Starting Price</p>
            <p className="text-primary-500 font-semibold text-xl xl:text-2xl">
              {property.startingPrice}
            </p>
          </div>
          <Link to={property.detailsUrl}>
            <Button
              variant="primary"
              size="md"
              label="View Details"
              Icon={FaArrowRight}
              // extraClass={`md:${(size = "md")}`}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
