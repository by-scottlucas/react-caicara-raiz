import './Pagination.css';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    setCurrentPage: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, setCurrentPage }: PaginationProps) {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="pagination gap-3 d-flex align-items-center justify-content-center mt-2 mt-lg-4 mb-lg-5">
            <button
                className="btn pagination-button"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}>
                <i className="bi bi-chevron-left"></i>
            </button>

            {pageNumbers.map((number) => (
                <button
                    key={number}
                    className={`btn pagination-number ${currentPage === number ? 'active' : ''}`}
                    onClick={() => setCurrentPage(number)}>
                    {number}
                </button>
            ))}

            <button
                className="btn pagination-button"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}>
                <i className="bi bi-chevron-right"></i>
            </button>
        </div>
    );
}
