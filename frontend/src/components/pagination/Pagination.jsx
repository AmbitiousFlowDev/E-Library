export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
      <div className="flex flex-wrap justify-center  join">
        {pageNumbers.map((number) => (
            <button
                key={number}
                className={`px-3 py-2  text-sm font-medium transition-colors duration-200 ${
                    currentPage === number - 1 ? "bg-primary text-white" : "bg-gray-300 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => onPageChange(number)}
            >
              {number}
            </button>
        ))}
      </div>
  )
}

