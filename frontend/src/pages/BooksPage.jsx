import { useEffect , useState } from "react";
import fetchBooks from "../features/book/actions/fetchBooks";
import { useSelector, useDispatch } from "react-redux";
import Book       from "../components/Book";
import Pagination from "../components/Pagination";

export default function BooksPage() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 1;
  const handlePageChange = (page) => {
    setCurrentPage(page - 1);
    fetchData(page - 1);
  };

  const { books, loading, error } = useSelector((state) => state.topBooks);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  console.log(books);
  return (
    <section className="flex flex-col mt-12 px-6">
      <h1 className="text-4xl px-6 font-[poppins]">Books</h1>
      <div className="flex gap-4">
        {
          !loading ? (books?.content?.map((item) => {
            return <Book book={item} />;
          })) : <div>Loading</div>
        }
      </div>
      <Pagination
        currentPage={currentPage + 1}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  );
}
