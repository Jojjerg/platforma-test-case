import React from "react";

type OptionMenuProps = {
  index: number;
  hideOptions: () => void
} 

const OptionMenu: React.FC<OptionMenuProps> = ({ index, hideOptions }) => {
  const hideCol = (col: number) => {
    const row = document.getElementById("title-row");
    const contentRow = document.getElementsByClassName("content-row");

    if (!row || !contentRow) return;

    const colToHide = row.getElementsByTagName("th")[col];
    colToHide.classList.add("hidden");
    hideOptions();

    for (let i = 0; i < contentRow.length; i++) {
      const contentToHide = contentRow[i].getElementsByTagName("td")[col];
      contentToHide.classList.add("hidden");
    }

  };

  const showAll = () => {
    const row = document.getElementById("title-row");
    const contentRow = document.getElementsByClassName("content-row");

    if (!row) return;

    const cols = row.getElementsByTagName("th");
    for(let i = 0; i < cols.length; i++) {
      cols[i].classList.remove("hidden")
    }

    for (let i = 0; i < contentRow.length; i++) {
      const rows = contentRow[i].getElementsByTagName("td");
      for(let j = 0; j < rows.length; j++) {
        rows[j].classList.remove("hidden")
      }
    }

    hideOptions();
  };

  return (
    <div className="w-max h-max absolute left-[70%] top-[87%] bg-white border shadow-xl rounded-md z-[100]">
      <ul className="flex flex-col">
        <li>
          <button
            className="w-full px-4 py-2 bg-white hover:brightness-90 duration-200 transition-all"
            onClick={() => hideCol(index)}
          >
            Скрыть
          </button>
        </li>
        <li>
          <button
            onClick={showAll}
            className="w-full px-4 py-2 bg-white hover:brightness-90 duration-200 transition-all"
          >
            Показать все
          </button>
        </li>
      </ul>
    </div>
  );
};

export default OptionMenu;
