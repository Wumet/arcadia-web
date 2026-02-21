import Button from "./Button";
import ceoImage from "../assets/ceo.jpg";

function NewLetterSub() {
  return (
    <section className="w-full max-sm:py-14 sm:py-20x 2xl:py-30x px-6 sm:px-10 xl:px-40 2xl:px-50 flex gap-20 xl:gap-60 items-center bg-dark text-neutral-50">
      <div className="space-y-4 xl:space-y-10">
        <h1 className="text-2xl sm:text-5xl xl:text-6xl sm:text-nowrap font-[510]">
          Stay Ahead of the Market
        </h1>
        <p className="xl:text-xl font-ligh text-neutral-300">
          Join our private newsletter for early alerts on new listings{" "}
          <br className="max-sm:hidden" />
          and exclusive market insights.
        </p>
        <div className="">
          <div className="flex gap-4 max-sm:flex-col">
            <input
              type="email"
              name=""
              id=""
              placeholder="Input email"
              className="border-[0.5px] rounded-md p-4 h-fit w-full focus:outline-none focus:border focus:border-primary-500"
            />
            <Button label="Subscribe Now" extraClass="text-nowrap" size="lg" />
          </div>
          <p className="text-sm sm:text-nowrap mt-4 font-lightx text-neutral-500">
            By subscribing, you agree to our Privacy Policy and Terms of
            Service.
          </p>
        </div>
      </div>
      <img
        src={ceoImage}
        alt="A picture of the CEO"
        className="object-scale-down  h-100 w-100 xl:h-150 md:w-1/2 xl:object-cover max-sm:hidden"
      />
    </section>
  );
}

export default NewLetterSub;
