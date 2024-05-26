interface PaginationButtonProps {
  page: number;
  active?: boolean;
  onClick: (page: number) => void;
}

export default function PaginationButton({
  page,
  active = false,
  onClick,
}: PaginationButtonProps) {
  return (
    <button
      type="button"
      className={`user-select-none min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800
                ${active ? "bg-gray-200" : ""}
             hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none  disabled:opacity-50 disabled:pointer-events-none`}
      onClick={() => onClick(page)}
    >
      {page}
    </button>
  );
}
