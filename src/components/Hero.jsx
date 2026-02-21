import { Link } from "react-router-dom";
import Button from "./Button";

function Hero() {
  return (
    <div className="relative h-[60vh] md:h-[75vh] lg:h-[80vh] flex flex-col justify-end bg-[url(./assets/heroImage.jpg)] bg-cover bg-no-repeat bg-center py-20 max-sm:px-6 sm:pl-20 xl:pl-40 text-neutral-300 z-10">
      <div className="absolute inset-0 bg-linear-to-bl max-sm:from-black/80 max-sm:to-black/60 from-black/1 via-black/55 to-black"></div>
      <div className="relative z-20">
        <h1 className="max-sm:text-5xl text-8xl font-[510]">
          Find your <br /> dream <span className="text-primary-400">home</span>
        </h1>
        <p className="mt-4 sm:text-xl opacity-90 font-light">
          Explore modern estates with flexible payment <br /> plans designed for
          you
        </p>
        <div className="mt-6">
          <Button
            to="/properties"
            label="Browse Available Properties"
            variant="primary"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
