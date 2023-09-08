import { Column } from "@/@types/Column";
import { ColumnData } from "@/@types/ColumnData";
import React from "react";
import TableHeading from "./TableHeading";
import Td from "./Td";
import { User } from "@/@types/User";

type TableProps = {
  data: ColumnData;
  userData: User[];
  handleDBClick: (user: User) => void;
};

const Table: React.FC<TableProps> = ({ data, userData, handleDBClick }) => {
  return (
    <>
      {!data.columns ? (
        <p className="text-2xl font-bold">Произошла ошибка во время загрузки таблицы</p>
      ) : (
        <table id="table" className="w-full flex flex-col items-center px-10">
          <thead className="w-full flex flex-col gap-16 items-center justify-center">
            <tr
              id="title-row"
              className="w-full flex items center justify-between [&>*:nth-child(1)]:rounded-tl-md [&>*:nth-child(4)]:rounded-tr-md"
            >
              {data.columns.map((col: Column, index: number) => (
                <TableHeading key={index} col={col} index={index} />
              ))}
            </tr>
          </thead>
          <tbody className="w-full flex flex-col items-center justify-center">
            {userData.map((user: User) => (
              <tr
                key={user.id}
                className="content-row w-full flex items-center justify-between bg-white hover:brightness-[90%] duration-200 transition-background [&>*:nth-child(2)]:text-center"
                onDoubleClick={() => handleDBClick(user)}
              >
                <Td data={user.date} />
                <Td data={user.consumption} />
                <Td data={user.name} />
                <Td data={user.city} />
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Table;
