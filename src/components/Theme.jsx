import { useState } from "react";
import Switch from "./Switch";

function Theme() {
  const [theme, setTheme] = useState("dark");

  const handleTheme = () => {
    setTheme("light");
  };
  //   const toggleTheme = () => {
  //     setTheme("light");
  //   };

  return (
    <div className="">
      {/* <button
        onClick={toggleSwitch}
        className={`w-14 h-8 p-1 rounded-full flex transition-colors duration-300 trans ${theme ? "bg-gray-600" : "bg-green-600"}`}
      >
        <span
          className={`bg-gray-200 w-[60%] h-full rounded-full transition-transform duration-400 ${isOn ? "translate-x-0" : "translate-x-5"}`}
        ></span>
      </button> */}
      <Switch onToggle={handleTheme} isOn={theme}></Switch>
    </div>
  );
}

export default Theme;
