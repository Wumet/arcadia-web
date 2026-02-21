import { Link } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import { FaArrowRight } from "react-icons/fa6";

function FeaturedProperties({ properties }) {
  return (
    <section className="py-10 sm:py-20 2xl:py-30 px-6 sm:px-10 xl:px-40 2xl:px-50 space-y-8 md:space-y-12">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl sm:text-5xl xl:text-6xl font-[510]">
          Featured Properties
        </h1>
        <Link
          to="./pages/Properties"
          className="text-sm text-accent flex items-center gap-3 max-sm:hidden"
        >
          <span>Browse all Properties</span>
          <FaArrowRight className="opacity-80" />
        </Link>
      </div>
      <div className="max-sm:space-y-6 sm:grid grid-cols-3 gap-4">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
        <Link
          to=""
          className="text-sm text-accent flex items-center justify-center py-4 gap-3 sm:hidden border border-accent"
        >
          <span>Browse all Properties</span>
          <FaArrowRight className="opacity-80" />
        </Link>
      </div>
    </section>
  );
}

export default FeaturedProperties;
