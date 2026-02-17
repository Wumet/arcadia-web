// import { useState } from "react";

function Switch(isOn, onToggle) {
  // const [isOn, setIsOn] = useState(false);

  return (
    <div className="">
      <button
        onClick={onToggle}
        className={`w-14 h-8 p-1 rounded-full flex transition-colors duration-300 trans ${isOn ? "bg-gray-600" : "bg-green-600"}`}
      >
        <span
          className={`bg-gray-200 w-[60%] h-full rounded-full transition-transform duration-400 ${isOn ? "translate-x-0" : "translate-x-5"}`}
        ></span>
      </button>
    </div>
  );
}

export default Switch;
