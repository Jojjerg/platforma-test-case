import React from "react";
import Span from "./Span";
import { User } from "@/@types/User";

type ModalProps = {
  row: User | undefined;
  closeModal: () => void;
};

const Modal: React.FC<ModalProps> = ({ row, closeModal }) => {
  return (
    <div className="absolute w-[40%] h-max pt-4 pb-20 flex flex-col gap-4 top-12 left-[27%] bg-white border rounded-md shadow-lg text-black">
      {row ? (
        <div className="p-6 relative">
          <button
            className="absolute left-[85%] px-4 py-1 rounded-md border border-gray-300 hover:border-[#313131] duration-200 transtiton-all"
            onClick={closeModal}
          >
            Закрыть
          </button>
          <div className="flex flex-col gap-6">
            <Span title="Дата" data={row.date} />
            <Span title="Потребление" data={row.consumption} />
            <Span title="Имя" data={row.name} />
            <Span title="Город" data={row.city} />
          </div>
        </div>
      ) : (
        <>
          <span className="text-2xl font-bold text-[#313131]">
            Произошла ошибка при загрузке информации
          </span>
        </>
      )}
    </div>
  );
};

export default Modal;
