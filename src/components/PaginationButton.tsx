import React from "react";

type PaginationButtonProps = {
  callback?: boolean;
  onClick: () => void;
  text: string | number;
};

const PaginationButton: React.FC<PaginationButtonProps> = ({
  callback,
  onClick,
  text,
}) => {
  return (
    <button
      className="px-4 py-1 rounded-md border border-gray-300 enabled:hover:border-[#313131] duration-200 transtiton-all disabled:border-transparent disabled:bg-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed"
      disabled={callback}
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  );
};

export default PaginationButton;
