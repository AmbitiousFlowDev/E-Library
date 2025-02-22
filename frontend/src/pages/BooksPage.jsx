import { useEffect, useState, useCallback } from "react"
import fetchBooks                           from "../features/book/actions/fetchBooks"
import { useSelector, useDispatch }         from "react-redux"
import Pagination                           from "../components/pagination/Pagination"
import { FaArrowLeft }                      from "react-icons/fa"
import { useNavigate }                      from "react-router-dom"
import Book                                 from "../components/book/Book"
import BooksList from "../components/book/BooksList.jsx";
import PageNavigator from "../components/navigation/PageNavigator.jsx";

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
            <PageNavigator title={'Books'} path={-1}/>
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="text-xl text-gray-600">Loading...</div>
                </div>
            ) : (
                <BooksList books={books} />
            )}
            <div className="mt-12 flex justify-center">
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
        </div>
    )
}

