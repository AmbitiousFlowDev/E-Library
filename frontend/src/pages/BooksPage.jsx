import { useEffect, useState, useCallback } from "react"
import fetchBooks                           from "../features/book/actions/fetchBooks"
import { useSelector, useDispatch }         from "react-redux"
import Pagination                           from "../components/pagination/Pagination"
import { FaArrowLeft }                      from "react-icons/fa"
import { useNavigate }                      from "react-router-dom"
import Book                                 from "../components/book/Book"

export default function BooksPage() {
    const dispatch                 = useDispatch()
    const [currentPage, setCurrentPage] = useState(0)
    const [totalPages, setTotalPages]   = useState(1)
    const navigate               = useNavigate()

    const { books, loading, error } = useSelector((state) => state.books)

    const handlePageChange = (page) => {
        setCurrentPage(page - 1)
        fetchData(page - 1)
    }

    const fetchData = useCallback((page) => {dispatch(fetchBooks({page, size: 5, sortBy: "title",}))}, [dispatch])

    useEffect(() => {
        fetchData(currentPage)
    }, [currentPage, fetchData])

    useEffect(() => {
        if (books?.page?.totalPages) {
            setTotalPages(books.page.totalPages)
        }
    }, [books])

    return (
        <div className="container mx-auto px-4 py-10">
            <header className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800">Books</h1>
                <button
                    className="p-2 rounded-full bg-secondary hover:bg-gray-200 transition-colors duration-200"
                    onClick={() => navigate(-1)}
                >
                    <FaArrowLeft className="w-6 h-6 text-gray-600" />
                </button>
            </header>

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="text-xl text-gray-600">Loading...</div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 items-stretch">
                    {books?.content?.map((item) => (
                        <div key={item.id} className="flex justify-center">
                            <Book book={item} />
                        </div>
                    ))}
                </div>
            )}
            <div className="mt-12 flex justify-center">
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
        </div>
    )
}

