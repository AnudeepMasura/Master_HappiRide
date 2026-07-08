import "./Pagination.css";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({
    currentPage,
    totalPages,
    onPageChange
}: PaginationProps) => {

    if (totalPages <= 1) {

        return null;

    }

    return (
        <div className="pagination">
            <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                Previous
            </button>

            {
                Array.from(
                    { length: totalPages },
                    (_, index) => (
                        <button
                            type="button"
                            key={index}
                            className={
                                currentPage === index + 1
                                    ? "active-page"
                                    : ""
                            }
                            onClick={() => onPageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    )
                )
            }

            <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                Next
            </button>
        </div>
    );

};

export default Pagination;
