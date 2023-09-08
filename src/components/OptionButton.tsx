import React from "react";

const OptionButton = ({ showHideOption }: { showHideOption: () => void }) => {
  return (
    <button onClick={showHideOption} className="w-[15px] h-[20px] flex flex-col items-center justify-center gap-[2px] outline-none focus:border-none focus:outline-none">
      <div className="w-[5px] h-[5px] bg-[#313131] rounded-full"></div>
      <div className="w-[5px] h-[5px] bg-[#313131] rounded-full"></div>
      <div className="w-[5px] h-[5px] bg-[#313131] rounded-full"></div>
    </button>
  );
};

export default OptionButton;
