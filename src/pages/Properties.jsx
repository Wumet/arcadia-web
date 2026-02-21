import Header from "../components/Header";

function About() {
  return (
    <>
      <title>Properties</title>
      <>
        <section className="relative h-[50vh] lg:h-[60vh] py-14 sm:py-20 2xl:py-30 px-6 sm:px-20 xl:px-40 2xl:px-50 space-y-8 md:space-y-12 bg-[url(./assets/heroImage.jpg)] bg-cover bg-no-repeat bg-center flex justify-center items-center">
          <div className="absolute inset-0 bg-linear-to-bl from-black/70 to-black/70"></div>
          <div className="text-neutral-200 text-center z-20 space-y-4">
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-[510]">
              Explore Our Available Properties
            </h1>
            <p className="md:text-xl text-neutral-300 font-light">
              Discover premium estates curated for those who seek architectural
              excellence and unparalleled comfort in the heart of the world's
              most vibrant locations.
            </p>
          </div>
        </section>
        {/* search & filter */}
        <div className="rounded-md shadow-lg shadow-neutral-200 bg-white w-5/6 mx-auto p-8 -translate-y-8">
          <input type="search" name="" id="" />
        </div>

        {/* properties */}
        <div className="pt-6 sm:pt-10 2xl:pt-15 px-6 sm:px-20 xl:px-40 2xl:px-50">
          <div className="">
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-[510]">
              Properties
            </h1>
            <p className="text-neutral-500 mt-2">
              Showing 12 of 48 properties found
            </p>
          </div>
        </div>
      </>
    </>
  );
}

export default About;
