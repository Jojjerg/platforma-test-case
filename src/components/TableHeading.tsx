import React, { ChangeEvent, useState } from "react";

import { Column } from "@/@types/Column";
import OptionButton from "./OptionButton";
import OptionMenu from "./OptionMenu";

type TableHeadingProps = {
  index: number;
  col: Column;
};

const TableHeading: React.FC<TableHeadingProps> = ({ index, col }) => {
  const [isShowOptions, setIsShowOptions] = useState<boolean>(false);
  const [colHeading, setColHeading] = useState<string>(col.caption);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setColHeading(e.target.value);
  };

  return (
    <th
      key={index}
      className="flex items-center justify-center w-full max-h-[42px] border border-gray-300 py-2 relative"
    >
      <div className="w-full">
        <input
          type="text"
          placeholder="Введите название колонки"
          value={colHeading}
          className="text-center bg-white placeholder:font-normal focus:outline focus:outline-transparent focus:border focus:border-transparent focus:border-b-gray-600"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <OptionButton showHideOption={() => setIsShowOptions((prev) => !prev)} />
      {isShowOptions && (
        <OptionMenu index={index} hideOptions={() => setIsShowOptions(false)} />
      )}
    </th>
  );
};

export default TableHeading;
