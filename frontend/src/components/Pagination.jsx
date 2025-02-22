export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="join">
      {pageNumbers.map((page) => (
        <input
          key={page}
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label={page.toString()}
          checked={currentPage === page}
          onChange={() => onPageChange(page)}
        />
      ))}
    </div>
  );
}
