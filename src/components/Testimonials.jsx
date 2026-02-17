import NewsCard from "./NewsCard";
import TestimonialCard from "./TestimonialCard";

function Testimonials({ testimonials }) {
  return (
    <section className="pb-14 sm:pb-20 2xl:pb-30 px-6 sm:px-20 xl:px-40 2xl:px-50 space-y-8 sm:space-y-12">
      <h1 className="text-4xl sm:text-5xl xl:text-6xl font-[510]">
        Client Perspectives
      </h1>
      <div className="flex max-sm:flex-col gap-4">
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} t={t}></TestimonialCard>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
