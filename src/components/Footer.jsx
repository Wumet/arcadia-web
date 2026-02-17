import { FaLocationDot } from "react-icons/fa6";
import Logo from "../assets/logo.png";

function Footer() {
  // const contactDetails ={ [
  //   {
  //     address: "123 Elite Plaza, GRA, PortHarcourt",
  //     icon:  <FaLocationDot className="text-primary-500" />,
  //   }
  // ]}

  return (
    <footer className="pt-10 sm:pt-20 2xl:pt-30 px-6 sm:px-20 xl:px-40 2xl:px-50">
      <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-8 sm:gap-20 pb-8">
        <div className="col-span-2">
          <img src={Logo} alt="" className="w-30 md:w-40 xl:w-60 mb-4" />
          <p className="text-neutral-600 sm:text-[18px] font-light">
            Luxury real estate development company committed to creating
            sustainable communities and exceptional architectural value across
            the globe.
          </p>
        </div>
        <div className="">
          <h4>Quick Links</h4>
        </div>
        <div className="">
          <h4>Contact Us</h4>
          <ul className="text-sm text-gray-500 mt-3 space-y-2">
            <li className="flex gap-1 items-center">
              <FaLocationDot className="text-primary-500" />
              <span>123 Elite Plaza, GRA, PortHarcourt</span>
            </li>
            <li className="flex gap-1 items-center">
              <FaLocationDot className="text-primary-500" />
              <span>+234 905 000 1234</span>
            </li>
            <li className="flex gap-1 items-center">
              <FaLocationDot className="text-primary-500" />
              <span>hello@arcadia-realestate.com</span>
            </li>
          </ul>
        </div>
      </div>
      <p className="border-t border-neutral-200 w-full text-center py-6 text-sm text-neutral-400 font-light block">
        © 2024 Arcadia Real Estate Platform. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
