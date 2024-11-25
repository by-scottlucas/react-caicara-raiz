import './Pagination.css';

export default function Pagination({ currentPage, totalPages }: any) {
    return (
        <div className="pagination gap-3 d-flex align-items-center justify-content-center mt-2 mt-lg-4 mb-lg-5">
            <button
                className="btn pagination-button"
                // onClick={goToPreviousPage}
                disabled={currentPage === 1}
            >
                <i className="bi bi-chevron-left"></i>
            </button>
            <span className='current-page'>{currentPage}</span>
            <button
                className="btn pagination-button"
                // onClick={goToNextPage}
                disabled={currentPage === totalPages}
            >
                <i className="bi bi-chevron-right"></i>
            </button>
        </div>
    )
}