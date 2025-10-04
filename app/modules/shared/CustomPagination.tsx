"use client"
import { DEFAULT_PAGE_SIZE } from '@/app/constants'
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

type TPageProps = {
    currentPage: number
    totalPages: number
    setCurrentPage: (value: React.SetStateAction<number>) => void
    parentContainerRef?: React.RefObject<HTMLDivElement | null>
}

export default function CustomPagination({ currentPage, setCurrentPage, totalPages, parentContainerRef }: TPageProps) {

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        parentContainerRef?.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
        parentContainerRef?.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handlePreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
        parentContainerRef?.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <div className="flex justify-center py-4 gap-2 ">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 0}
                    className="bg-transparent hover:bg-light-grey/50 disabled:hover:bg-defaultGrey/20 disabled:bg-secondaryBackground text-text/80 disabled:text-text/50 border border-text/20 disabled:hover:border-text/20 hover:border-text/40 flex-shrink-0 h-8 w-8 rounded-md grid place-items-center cursor-pointer disabled:cursor-not-allowed text-xs md:text-sm font-semibold"
                >
                    <IoChevronBack />
                </button>
                {/* )} */}
                {Array.from({
                    length: Math.ceil(totalPages / DEFAULT_PAGE_SIZE),
                }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index)}
                        className={`${currentPage === index
                            ? "font-semibold text-primary border-primary"
                            : "font-normal text-text border-white"
                            } bg-white border flex-shrink-0 h-8 w-8 rounded-md grid place-items-center cursor-pointer text-xs md:text-sm font-medium`}
                    >
                        {" "}
                        {index + 1}
                    </button>
                ))}
                <button
                    disabled={currentPage === (Math.ceil(totalPages / DEFAULT_PAGE_SIZE)-1)}
                    onClick={handleNextPage}
                    className="bg-transparent hover:bg-light-grey/50 disabled:hover:bg-defaultGrey/20 disabled:bg-secondaryBackground text-text/80 disabled:text-text/50 border border-text/20 disabled:hover:border-text/20 hover:border-text/40 flex-shrink-0 h-8 w-8 rounded-md grid place-items-center cursor-pointer disabled:cursor-not-allowed text-xs md:text-sm font-semibold"
                >
                    <IoChevronForward />
                </button>
            </div>
        </>
    )
}
