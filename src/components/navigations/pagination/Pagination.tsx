import PaginationButton from "./PaginationButton";

interface PaginationProps {
  endPage: number;
  activePage: number;
  batch: number;
  onClick: (page: number) => void;
}

export default function Pagination({ endPage, activePage, batch, onClick }: PaginationProps) {
    
    const getDisplayedPages = () => {
        
        const startPage = (batch - 1) * 3 + 1
        const endPageLimit = Math.min(batch * 3, endPage)

        const pages = [];
        for (let i = startPage; i <= endPageLimit; i++) {
            pages.push(i);
        }
        return pages;
        };

    const handleExceedingPageInput = (e: React.ChangeEvent<HTMLInputElement>) => {

        if(e.target.value.trim() === '') return

        let value = Number(e.target.value);
        if (value < 1) e.target.valueAsNumber = 1;
        if (value > endPage) e.target.valueAsNumber = endPage;
    };
    
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            
            let value = Number((e.target as HTMLInputElement).value);
            onClick(value);

            (e.target as HTMLInputElement).value = ''

        }
    };

    const displayedPages = getDisplayedPages();

    const endPageBatch = Math.ceil(endPage / 3)

    return (
        <div className="grid justify-center sm:flex sm:justify-end sm:items-center gap-4 py-4">
        <nav className="flex items-center gap-x-1">
            <button
            type="button"
            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none
            focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            onClick={() => onClick(activePage - 1)}
            disabled={activePage <= 1}
            >
            <svg
                className="flex-shrink-0 size-3.5"
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
            <span aria-hidden="true" className="sr-only">Previous</span>
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
            {(batch !== endPageBatch)  && (
                <div className="flex items-center">
                <div className="hs-tooltip inline-block">
                    <button
                    type="button"
                    className="hs-tooltip-toggle group min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-400 hover:text-blue-600 p-2 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:bg-white/10"
                    onClick={() => onClick(activePage + 3)}
                    >
                    <span className="group-hover:hidden text-xs">•••</span>
                    <svg
                        className="group-hover:block hidden flex-shrink-0 size-5"
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
                        className="hs-tooltip-content group-hover:opacity-100 group-hover:visible opacity-0 transition-opacity inline-block absolute -translate-y-8 invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
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
            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100
            disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            onClick={() => onClick(activePage + 1)}
            disabled={activePage >= endPage}
            >
            <span aria-hidden="true" className="sr-only">Next</span>
            <svg
                className="flex-shrink-0 size-3.5"
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
        <div className="flex justify-center sm:justify-start items-center gap-x-2">
            <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">Go to</span>
            <input
            type="number"
            max={endPage}
            className="min-h-[38px] py-2 px-2.5 block w-12 border-gray-200 rounded-lg text-sm text-center focus:border-blue-500 focus:ring-blue-500 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            style={{ MozAppearance: "textfield" }}
            onChange={handleExceedingPageInput}
            onKeyDown={handleKeyDown}
            />
            <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">page</span>
        </div>
        </div>
    );
    }
