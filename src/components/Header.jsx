import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from "react";

function Header() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/Properties" },
    { name: "About", path: "/About" },
    { name: "Contact Us", path: "/Contact" },
    { name: "Blog", path: "/Blog" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="flex justify-between px-8 xl:px-40 py-5 bg-[#ffffff] sticky top-0 left-0 right-0 z-20">
        <Link to="/" className="">
          <img src={Logo} alt="Acardia Logo" className="w-25 sm:w-30 xl:w-35" />
        </Link>
        <ul className="max-sm:hidden flex gap-8 font-normal tracking-wide opacity-80">
          {navLinks.map((navLink) => (
            <li key={navLink.name}>
              <Link
                to={navLink.path}
                className="hover:border-b-[3px] border-secondary-600 transition-all duration-300"
              >
                {navLink.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="max-sm:hidden">
          <Link to={"/Login"} className="pr-2 hover:underline">
            Login
          </Link>
          |
          <Link to={"/Create Account"} className="pl-2 hover:underline">
            Create Account
          </Link>
        </div>
        <button className="sm:hidden text-xl" onClick={handleClick}>
          {isOpen ? <MdClose /> : <GiHamburgerMenu />}
        </button>
      </header>

      {/* mobile nav menu  */}
      {isOpen && (
        <div
          className={`sm:hidden fixed right-0 w-5/6 bg-white z-20 p-8 shadow-lg transition-[height] duration-500 ease-in-out ${isOpen ? "h-[99vh]" : "max-h-0"}`}
        >
          <ul className="flex flex-col gap-8 font-medium tracking-wide opacity-70">
            {navLinks.map((navLink) => (
              <li key={navLink.name}>
                <Link to={navLink.path} className="text-xl">
                  {navLink.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;
