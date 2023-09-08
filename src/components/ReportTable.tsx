import { useMemo, useState } from "react";

import Heading from "./Heading";
import Modal from "./Modal";
import Pagination from "./Pagination";
import Table from "./Table";
import type { User } from "@/@types/User";
import data from "@/config/json-config/data.json";
import { userData } from "@/config/user-data";

const PageSize = 20;

const ReportTable = () => {
  const [selectedRow, setSelectedRow] = useState<User>();
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleDBClick = (user: User) => {
    setSelectedRow(user);
    setShowModal(true);
  };

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return userData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-4">
      <Heading data={data} />
      <Table data={data} userData={currentTableData} handleDBClick={handleDBClick} />
      <Pagination
        currentPage={currentPage}
        totalCount={userData.length}
        pageSize={PageSize}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
      {showModal && (
        <Modal row={selectedRow} closeModal={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default ReportTable;
