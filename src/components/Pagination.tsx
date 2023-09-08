import { DOTS } from "@/hooks/usePagination";
import PaginationButton from "./PaginationButton";
import React from "react";
import { usePagination } from "@/hooks/usePagination";

type PaginationProps = {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalCount,
  pageSize,
  onPageChange,
}) => {
  const siblingCount = 1;
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (!paginationRange) return;

  if (currentPage === 0 || paginationRange.length < 2) return null;

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className="flex items-center justify-center gap-2">
      <li>
        <PaginationButton
          callback={currentPage === 1}
          onClick={onPrevious}
          text="Назад"
        />
      </li>
      {paginationRange.map((pageNumber: number | string, index: number) => {
        if (pageNumber.toString() === DOTS) {
          return <li key={index} className="text-xl">&#8230;</li>;
        }

        return (
          <li>
            <PaginationButton
              key={index}
              onClick={() => onPageChange(+pageNumber)}
              text={pageNumber}
            />
          </li>
        );
      })}
      <li>
        <PaginationButton
          callback={currentPage === lastPage}
          onClick={onNext}
          text="Вперед"
        />
      </li>
    </ul>
  );
};

export default Pagination;
