import { ColumnData } from "@/@types/ColumnData";
import React from "react";

const Heading = ({ data }: { data: ColumnData }) => {
  return (
    <div className="w-max flex flex-col items-center justify-center gap-4 px-12 py-3 border border-gray-300 rounded-md">
      <h1 className="font-bold text-3xl">{data.name}</h1>
      <h2 className="text-xl">Код: {data.code}</h2>
    </div>
  );
};

export default Heading;
