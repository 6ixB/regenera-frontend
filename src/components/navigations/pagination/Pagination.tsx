import PaginationButton from "./PaginationButton";

interface PaginationProps {
  endPage: number;
  activePage: number;
  batch: number;
  onClick: (page: number) => void;
}

export default function Pagination({
  endPage,
  activePage,
  batch,
  onClick,
}: PaginationProps) {
  const getDisplayedPages = () => {
    const startPage = (batch - 1) * 3 + 1;
    const endPageLimit = Math.min(batch * 3, endPage);

    const pages = [];
    for (let i = startPage; i <= endPageLimit; i++) {
      pages.push(i);
    }
    return pages;
  };

  const handleExceedingPageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim() === "") return;

    let value = Number(e.target.value);
    if (value < 1) e.target.valueAsNumber = 1;
    if (value > endPage) e.target.valueAsNumber = endPage;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      let value = Number((e.target as HTMLInputElement).value);
      onClick(value);

      (e.target as HTMLInputElement).value = "";
    }
  };

  const displayedPages = getDisplayedPages();
  const endPageBatch = Math.ceil(endPage / 3);

  return (
    <div className="grid justify-center gap-4 py-4 sm:flex sm:items-center sm:justify-end">
      <nav className="flex items-center gap-x-1">
        <button
          type="button"
          className="inline-flex min-h-[38px] min-w-[38px] items-center justify-center gap-x-2 rounded-lg px-2.5 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100
                focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          onClick={() => onClick(activePage - 1)}
          disabled={activePage <= 1}
        >
          <svg
            className="size-3.5 flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6"></path>
          </svg>
          <span aria-hidden="true" className="sr-only">
            Previous
          </span>
        </button>
        <div className="flex items-center gap-x-1">
          {displayedPages.map((page) => (
            <PaginationButton
              key={page}
              page={page}
              active={page === activePage}
              onClick={onClick}
            />
          ))}
          {batch !== endPageBatch && (
            <div className="flex items-center">
              <div className="hs-tooltip inline-block">
                <button
                  type="button"
                  className="hs-tooltip-toggle group flex min-h-[38px] min-w-[38px] items-center justify-center rounded-lg p-2 text-sm text-gray-400 hover:text-blue-600 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  onClick={() => onClick(activePage + 3)}
                >
                  <span className="text-xs group-hover:hidden">•••</span>
                  <svg
                    className="hidden size-5 flex-shrink-0 group-hover:block"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 17 5-5-5-5"></path>
                    <path d="m13 17 5-5-5-5"></path>
                  </svg>
                  <span
                    className="hs-tooltip-content invisible absolute z-10 inline-block -translate-y-8 rounded bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity group-hover:visible group-hover:opacity-100"
                    role="tooltip"
                  >
                    Next {endPage - activePage - 1} pages
                  </span>
                </button>
              </div>
              <PaginationButton page={endPage} onClick={onClick} />
            </div>
          )}
        </div>
        <button
          type="button"
          className="inline-flex min-h-[38px] min-w-[38px] items-center justify-center gap-x-2 rounded-lg px-2.5 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none
                disabled:pointer-events-none disabled:opacity-50"
          onClick={() => onClick(activePage + 1)}
          disabled={activePage >= endPage}
        >
          <span aria-hidden="true" className="sr-only">
            Next
          </span>
          <svg
            className="size-3.5 flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </nav>
      <div className="flex items-center justify-center gap-x-2 sm:justify-start">
        <span className="whitespace-nowrap text-sm text-gray-800">Go to</span>
        <input
          type="number"
          max={endPage}
          className="block min-h-[38px] w-12 rounded-md border-gray-200 px-2.5 py-2 text-center text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          style={{ MozAppearance: "textfield" }}
          onChange={handleExceedingPageInput}
          onKeyDown={handleKeyDown}
        />
        <span className="whitespace-nowrap text-sm text-gray-800">page</span>
      </div>
    </div>
  );
}
